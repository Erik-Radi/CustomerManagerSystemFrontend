import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccessState } from '../../types/redux/AccessState';

const initialState = {
  username: null,
  accessToken: null,
} as AccessState;

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAccess: (state, action: PayloadAction<AccessState>) => {
      /*       if (state.username === null && state.accessToken === null) {
        state.username = action.payload.username;
        state.accessToken = action.payload.accessToken;
      } else if (action.payload.username === null && action.payload.accessToken === null) {
        state.username = action.payload.username;
        state.accessToken = action.payload.accessToken;
      } */
      //  state.username = state.username ?? && action.payload.username
      state.username = state.username && action.payload.username
        ? state.username
        : action.payload.username;

      state.accessToken = state.accessToken && action.payload.username
        ? state.accessToken
        : action.payload.accessToken;
    },
  },
});

export const { setAccess, setAccessToken } = accessSlice.actions;

export default accessSlice.reducer;
