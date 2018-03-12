import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

import Frame from '../frame/subroute.vue'
import userLay from '../page/user/lay.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/user',
      component: Frame,
      children: [
        {path: '/', component: userLay},
        {path: 'info', component: userInfo},
        {path: 'love', component: userLove}
      ],
    }
  ]
})
