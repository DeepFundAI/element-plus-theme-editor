import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/theme',
      name: 'theme',
      component: () => import('../views/ThemeEditor.vue'),
      children: [
        {
          path: 'component',
          name: 'component',
          component: () => import('../views/ComponentsCard.vue')
        }
      ]
    },
  ],
})

export default router
