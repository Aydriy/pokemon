import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from './types';

const initialState: UIState = {};

export const uiReducer = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setUiState(state: UIState, action: PayloadAction<{}>) {
      const {} = action.payload;
    },
  },
});

export const { setUiState } = uiReducer.actions;

export default uiReducer.reducer;
