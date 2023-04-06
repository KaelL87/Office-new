import NotFound from '@/components/not-found';
import RouteModules from '../features/**/route.ts';

const appRoutes = RouteModules.reduce((prev: Array<object>, module: any) => {
  prev.push(...module.default);
  return prev;
}, []);

export default [
  ...appRoutes,
  {
    path: '*',
    privacy: 'public',
    layout: {
      header: false,
      footer: false,
      menu: false,
    },
    component: NotFound,
  },
];
