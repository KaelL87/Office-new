import { lazy } from 'react';

const Pucharse = lazy(() => import('./index'));

export default [
  {
    name: 'pucharse',
    path: '/pucharse',
    exact: true,
    component: Pucharse,
    layout: {
      menu: true,
      header: true,
      footer: false,
      privacy: 'protected',
    },
  },
];
