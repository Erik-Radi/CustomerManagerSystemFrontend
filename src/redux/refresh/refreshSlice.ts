import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefreshState } from '../../types/redux/RefreshState';

const initialState = {
  username: null,
  refreshToken: null,
} as RefreshState;

export const refreshSlice = createSlice({
  name: 'refresh',
  initialState,
  reducers: {
    setRefresh: (state, action: PayloadAction<RefreshState>) => {
      state.username = state.username && action.payload.username
        ? state.username
        : action.payload.username;

      state.refreshToken = state.refreshToken && action.payload.refreshToken
        ? state.refreshToken
        : action.payload.refreshToken;
    },
  },
});

export const { setRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;
