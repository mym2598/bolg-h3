import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact:true,
      path: '/',
      component: '@/pages/home',
      redirect:'/home'
    },
    {
      exact:true,
      path: '/home',
      component: '@/pages/home',
    },
    {
      exact:true,
      path: '/list',
      component: '@/pages/list',
    },
    {
      path: '/blogItem',
      component: '@/pages/blogItem',
      routes: []
    },
    {
      path: '*',
      component: '@/pages/404',
    },
  ],
  fastRefresh: {},
});
