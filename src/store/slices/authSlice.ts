/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { callErrorToast } from '@/helpers/toast';

import { RootState } from '..';
import { authApiSlice } from '../apis/authApiSlice';

export interface IAuth {
  isAuthenticated?: boolean;
  currentUser?: object;
  token?: string;
}

const initialState: IAuth = {
  isAuthenticated: false,
  currentUser: null,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.currentUser = null;
      state.token = null;
      localStorage.clear();
      state.isAuthenticated = false;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      state.token = localStorage.getItem('token');
    },
    setCurrentUser: (state, action: PayloadAction<object>) => {
      state.currentUser = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
        console.log(payload);
        const { data, success, message } = payload;
        state.token = data.token;
        state.isAuthenticated = success;
        if (!success) {
          callErrorToast(message);
        }
        localStorage.setItem('token', data.token);
      })
      .addMatcher(authApiSlice.endpoints.verifyUser.matchFulfilled, (state, { payload }) => {
        console.log(payload);
        const { data, success, message } = payload;
        state.token = data.token;
        state.isAuthenticated = success;
        if (!success) {
          callErrorToast(message);
        }
        localStorage.setItem('token', data.token);
      });
  },
});

export const { setAuthenticated, setCurrentUser, logOut, setToken } = authSlice.actions;

export const isAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;
export const selectToken = (state: RootState): string => state.auth.token;

export default authSlice.reducer;
