const { createRouter, createWebHistory } = VueRouter;
import PageHome from '../components/pages/PageHome.js';
import PageContact from '../components/pages/PageContact.js';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         name: 'home',
         path: '/',
         component: PageHome
      },
      {
         name: 'contacts',
         path: '/contacts',
         component: PageContact
      }
   ],
   linkActiveClass: 'active'
})

export default router;