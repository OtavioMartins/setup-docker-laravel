import { createWebHistory, createRouter } from 'vue-router';

import DefaultTemplate from '../layouts/DefaultTemplate.vue'

import HomeView from '../views/HomeView.vue';
import InstitucionalView from '../views/InstitucionalView.vue';
import BlogView from '../views/BlogView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: "/",
    component:  DefaultTemplate,
    children: [
      { 
        path: "",
        name: "home",
        component: HomeView 
       },
       { 
         path: "institucional",
         name: "institucional",
         component: InstitucionalView 
       },
       { 
        path: "blog",
        name: "blog",
        component: BlogView 
       },
       { 
        path: "contact",
        name: "contact",
        component: ContactView 
       },
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
