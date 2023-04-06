import { lazy } from 'react';

const Learning = lazy(() => import('./index'));

export default [
  {
    name: 'learning',
    path: '/learning',
    exact: true,
    component: Learning,
    layout: {
      menu: true,
      header: true,
      footer: false,
      privacy: 'protected',
    },
  },
];
