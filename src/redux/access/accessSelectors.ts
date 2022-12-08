import { selectSession } from '../rootReducer';
import { RootState } from '../store';

export const selectAccess = (state: RootState) => selectSession(state).access;

export const selectUsername = (state: RootState) => selectAccess(state).username;
export const selectAccessToken = (state: RootState) => selectAccess(state).accessToken;
