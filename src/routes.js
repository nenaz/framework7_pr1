import { HomePage } from './pages/home';
import { AuthPage } from './pages/auth';
import { AboutPage } from './pages/about';

export const f7params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  routes: [
    {
      path: '/home',
      component: HomePage,
    },
    {
      path: '/about/',
      component: AboutPage,
    },
    {
      path: '/',
      component: AuthPage,
    },
  ],
};