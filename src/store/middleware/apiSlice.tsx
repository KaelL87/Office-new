/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { callErrorToast } from '@/helpers/toast';
import { logOut } from '@/store/slices/authSlice';

import { RootState } from '..';

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.API_SERVER_URL}`,
  // credentials: 'include', falla con el cors
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = (await baseQuery(args, api, extraOptions)) as any;
  console.log(result);
  if (result?.error) {
    callErrorToast('Conection lost. Check your conection or wait fews minutes');
  }
  if (result?.meta?.response?.status === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.currentUser;
      // store the new token
      // api.dispatch(setCredentials({ ...refreshResult, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
