import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import session from 'redux-persist/lib/storage/session';
import accessReducer from './access/accessSlice';
import refreshReducer from './refresh/refreshSlice';
import type { RootState } from './store';

const sessionStoragePersistConfig = {
  key: 'sessionStorage',
  storage: session,
};

const localStoragePersistConfig = {
  key: 'localStorage',
  storage: localStorage,
};

const sessionStorageReducer = combineReducers({
  access: accessReducer,
});

const localStorageReducer = combineReducers({
  refresh: refreshReducer,
});

const rootReducer = combineReducers({
  session: persistReducer(sessionStoragePersistConfig, sessionStorageReducer),
  local: persistReducer(localStoragePersistConfig, localStorageReducer),
});

export const selectSession = (state: RootState) => state.session;
export const selectLocal = (state: RootState) => state.local;

export default rootReducer;
