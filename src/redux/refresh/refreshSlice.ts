import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefreshState } from '../../types/redux/RefreshState';

const initialState = {
  refreshToken: null,
} as RefreshState;

export const refreshSlice = createSlice({
  name: 'refresh',
  initialState,
  reducers: {
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = state.refreshToken && action.payload
        ? state.refreshToken
        : action.payload;
    },
  },
});

export const { setRefreshToken } = refreshSlice.actions;

export default refreshSlice.reducer;
