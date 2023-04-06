import axios from 'axios';
import { isExpired } from 'react-jwt';

import env from '@/constants/env';
import { getToken } from '@/helpers/local-storage';
import { goURL } from '@/helpers/router';
import { getHeaders } from '@/utils';

const instance = axios.create({
  baseURL: env.ApiServerUrl,
});
instance.defaults.headers = getHeaders();

instance.interceptors.request.use(
  response => {
    const expired = isExpired(getToken());
    if (!expired) {
      response.headers = getHeaders();
      return response;
    } else {
      goURL('/login');
      return;
    }
  },
  error => {
    return Promise.reject(error.message);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.message);
  },
);

export default instance;
