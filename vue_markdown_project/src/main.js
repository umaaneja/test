
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MarkdownPage from './views/MarkdownPage.vue';

const routes = [
  {
    path: '/',
    name: 'MarkdownPage',
    component: MarkdownPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
    