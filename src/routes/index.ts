import Vue from 'vue';
import VueRouter from 'vue-router';
import beforeEach from './beforeEach'
import NotFound from '@/components/notFound.vue'
import pageRoutes from './pageRoutes'

const _PROD_ = process.env.NODE_ENV === 'production'

Vue.use(VueRouter);

// production don't need demos
if(_PROD_) {
  pageRoutes.splice(pageRoutes.length, 1)
}

// 404 at the end
pageRoutes.push({
  path: '*',
  name: 'NotFound',
  component: NotFound
})

const router = new VueRouter({
  mode: 'history',
  routes: pageRoutes,
});

// 路由守卫
router.beforeEach(beforeEach)

export default router