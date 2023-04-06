import { lazy } from 'react';

const Dashboard = lazy(() => import('./index'));

export default [
  {
    name: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    layout: {
      menu: true,
      header: true,
      footer: false,
      privacy: 'protected',
    },
  },
];
