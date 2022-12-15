import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ViewOptionsState } from '../../types/redux/ViewOptionsState';

const initialState = {
  isMobileSidebarOpen: false,
} as ViewOptionsState;

export const viewOptionsSlice = createSlice({
  name: 'view-options',
  initialState,
  reducers: {
    toggleIsMobileSidebarOpen: (state) => {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
    setisMobileSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileSidebarOpen = action.payload;
    },
  },
});

export const { toggleIsMobileSidebarOpen, setisMobileSidebarOpen } = viewOptionsSlice.actions;

export default viewOptionsSlice.reducer;
