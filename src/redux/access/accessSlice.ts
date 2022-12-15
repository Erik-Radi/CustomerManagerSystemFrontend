import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccessState } from '../../types/redux/AccessState';

const initialState = {
  accessToken: null,
} as AccessState;

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = accessSlice.actions;

export default accessSlice.reducer;
