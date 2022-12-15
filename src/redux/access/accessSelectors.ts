import { selectSession } from '../rootReducer';
import { RootState } from '../store';

export const selectAccess = (state: RootState) => selectSession(state).access;

export const selectAccessToken = (state: RootState) => selectAccess(state).accessToken;
