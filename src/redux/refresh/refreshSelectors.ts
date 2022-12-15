import { selectLocal } from '../rootReducer';
import { RootState } from '../store';

export const selectRefresh = (state: RootState) => selectLocal(state).refresh;

export const selectUsername = (state: RootState) => selectRefresh(state).username;
export const selectRefreshToken = (state: RootState) => selectRefresh(state).refreshToken;
