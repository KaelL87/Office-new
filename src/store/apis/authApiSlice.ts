/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { apiSlice } from '../middleware/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: newUserData => ({
        url: '/register',
        method: 'POST',
        body: { ...newUserData },
      }),
    }),
    verifyUser: builder.mutation({
      query: code => ({
        url: '/verify',
        method: 'POST',
        body: { ...code },
      }),
    }),
    forgotSendMail: builder.mutation({
      query: email => ({
        url: '/forget_pwrd',
        method: 'POST',
        body: { ...email },
      }),
    }),
    forgotSendNewCredentials: builder.mutation({
      query: newCredentials => ({
        url: '/set_pwrd',
        method: 'POST',
        body: { ...newCredentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyUserMutation,
  useForgotSendMailMutation,
  useForgotSendNewCredentialsMutation,
} = authApiSlice;
