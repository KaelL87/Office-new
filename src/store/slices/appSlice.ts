import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

export interface IApp {
  loading?: number;
  openModal?: boolean;
  openMenu?: boolean;
  openLogin?: boolean;
  openRegister?: boolean;
  openForgot?: boolean;
}

const initialState: IApp = {
  loading: 0,
  openModal: false,
  openMenu: false,
  openLogin: false,
  openRegister: false,
  openForgot: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      const currentLoading = state.loading;
      state.loading = action.payload ? currentLoading + 1 : currentLoading - 1;
    },
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
    setOpenLogin: (state, action: PayloadAction<boolean>) => {
      state.openLogin = action.payload;
    },
    setOpenRegister: (state, action: PayloadAction<boolean>) => {
      state.openRegister = action.payload;
    },
    setOpenForgot: (state, action: PayloadAction<boolean>) => {
      state.openForgot = action.payload;
    },
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
  },
});

export const {
  setLoading,
  setOpenMenu,
  setOpenLogin,
  setOpenRegister,
  setOpenForgot,
  setOpenModal,
} = appSlice.actions;

export const stateApp = (state: RootState): IApp => state.app;

export default appSlice.reducer;
