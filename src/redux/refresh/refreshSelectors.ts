import { selectLocal } from '../rootReducer';
import { RootState } from '../store';

export const selectRefresh = (state: RootState) => selectLocal(state).refresh;

export const selectRefreshToken = (state: RootState) => selectRefresh(state).refreshToken;
