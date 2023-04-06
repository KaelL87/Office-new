import { lazy } from 'react';

const Home = lazy(() => import('./index'));
const Shopping = lazy(() => import('./components/shopping/index'));

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
    layout: {
      menu: false,
      header: true,
      footer: true,
      privacy: 'public',
    },
  },
  {
    name: 'shopping',
    path: '/shopping',
    exact: true,
    component: Shopping,
    layout: {
      menu: false,
      header: true,
      footer: true,
      privacy: 'public',
    },
  },
];
