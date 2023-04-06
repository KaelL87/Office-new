import { lazy } from 'react';

const Reviews = lazy(() => import('./index'));

export default [
  {
    name: 'reviews',
    path: '/reviews',
    exact: true,
    component: Reviews,
    layout: {
      menu: true,
      header: true,
      footer: false,
      privacy: 'protected',
    },
  },
];
