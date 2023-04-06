import { lazy } from 'react';

const Course = lazy(() => import('./index'));

export default [
  {
    name: 'courses',
    path: '/courses/:name',
    exact: true,
    component: Course,
    layout: {
      menu: false,
      header: true,
      footer: true,
      navigation: true,
      privacy: 'public',
    },
  },
];
