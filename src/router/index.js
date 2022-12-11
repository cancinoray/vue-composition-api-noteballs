import { createRouter, createWebHashHistory } from 'vue-router';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // * it is a shorthand for routes:routes, key and value is the same
          // * so by destructuring it will 'routes' only
    
});

export default router; // ! it's like we are exposing the router to use by other components. Check tha main.js