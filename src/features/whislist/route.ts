import { lazy } from 'react';

const Whislist = lazy(() => import('./index'));

export default [
  {
    name: 'whislist',
    path: '/whislist',
    exact: true,
    component: Whislist,
    layout: {
      menu: true,
      header: true,
      footer: false,
      privacy: 'protected',
    },
  },
];
