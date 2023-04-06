import { lazy } from 'react';

const Login = lazy(() => import('./components/login/index'));
const Register = lazy(() => import('./components/register/index'));
const Forgot = lazy(() => import('./components/forgot/index'));

export default [
  {
    name: 'login',
    path: '/login',
    exact: true,
    layout: {
      header: false,
      footer: true,
      privacy: 'public',
    },
    component: Login,
  },
  {
    name: 'register',
    path: '/register',
    exact: true,
    layout: {
      header: false,
      footer: true,
      privacy: 'public',
    },
    component: Register,
  },
  {
    name: 'forgot',
    path: '/forgot-password',
    exact: true,
    layout: {
      header: false,
      footer: true,
      privacy: 'public',
    },
    component: Forgot,
  },
];
