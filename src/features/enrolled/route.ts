import { lazy } from 'react';

const Enrolled = lazy(() => import('./index'));

export default [
  {
    name: 'enrolled',
    path: '/enrolled',
    exact: true,
    component: Enrolled,
    layout: {
      menu: true,
      header: true,
      footer: false,
      privacy: 'protected',
    },
  },
];
