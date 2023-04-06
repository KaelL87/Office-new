import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import appSlice from './slices/appSlice';
import authSlice from './slices/authSlice';
import layoutSlice from './slices/layoutSlice';
import modalSlice from './slices/modalSlice';
// eslint-disable-next-line import/order
import { apiSlice } from './middleware/apiSlice';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    app: appSlice,
    modal: modalSlice,
    layout: layoutSlice,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(routerMiddleware(history)),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
