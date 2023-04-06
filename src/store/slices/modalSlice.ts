import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

export interface IModalRegister {
  name: string;
}
export type IModal = {
  modals?: Array<IModalRegister>;
};

const initialState: IModal = { modals: [] };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<IModalRegister>) => {
      state.modals.push(action.payload);
    },
    pop: state => {
      if (state?.modals.length > 0) state?.modals.pop();
    },
    reset: () => initialState,
  },
});

export const { push, pop, reset } = modalSlice.actions;

export const stateModal = (state: RootState): IModal => state.modal;

export default modalSlice.reducer;
