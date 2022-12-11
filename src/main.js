import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index' //* you can use the index.js and name it router because of the 'export default router' of the index.js

// import './assets/main.css';

createApp(App)
  .use(router)
  .mount('#app');
