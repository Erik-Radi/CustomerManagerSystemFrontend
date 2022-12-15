import { selectViewOptions } from '../rootReducer';
import { RootState } from '../store';

export const selectIsMobileSidebarOpen = (
  state: RootState,
) => selectViewOptions(state).isMobileSidebarOpen;

export default selectViewOptions;
