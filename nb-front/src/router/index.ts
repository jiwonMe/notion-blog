import createRouter from 'router5';

const routes = [
  { name: 'home', path: '/' },
  { name: 'profile', path: '/profile' },
];

const router = createRouter(routes);

router.start();
