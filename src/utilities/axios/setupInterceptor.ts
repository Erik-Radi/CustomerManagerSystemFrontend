import { setAccessToken } from '../../redux/access/accessSlice';
import { setRefresh } from '../../redux/refresh/refreshSlice';
import { store } from '../../redux/store';
import api from './api';

const setup = () => {
  api.interceptors.request.use((config) => {
    if (config.url === '/auth/refresh') {
      return config;
    }
    const { accessToken } = store.getState().session.access;

    if (accessToken) {
      if (!config?.headers) {
        throw new Error('Expected config and config.header not found!');
      }
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  }, (error) => Promise.reject(error));

  api.interceptors.response.use(
    (res) => res,
    async (err) => {
      const { refreshToken } = store.getState().local.refresh;
      const originalConfig = err.config;

      if (originalConfig.url !== '/auth/login' && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await api.get('/auth/refresh', {
              headers: {
                refresh_token: refreshToken,
              },
            });
            store.dispatch(setAccessToken(rs.headers.authorization || null));

            return await api(originalConfig);
          } catch (error) {
            // set store values to null
            store.dispatch(setAccessToken(null));
            store.dispatch(setRefresh({
              username: null,
              refreshToken: null,
            }));
            return Promise.reject(error);
          }
        }
      }
      return Promise.reject(err);
    },
  );
};

export default setup;
