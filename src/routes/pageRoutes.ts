import { RouteConfig } from 'vue-router';

/**
 * webpackChunkName: myChunkName
 * webpackChunkName: 表示包名，非注释
 */

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue');
const Demos = () => import(/* webpackChunkName: "demos" */ '@/pages/demos/demos.vue');
const List = () => import(/* webpackChunkName: "list" */ '@/pages/list/index.vue');

// console.log(Home)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/demos',
    name: 'Demos',
    component: Demos,
  }
]

export default routes