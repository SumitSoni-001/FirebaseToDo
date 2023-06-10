const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Dashboard.vue') },
      { path: '/resume', component: () => import('src/pages/ResumeEdit.vue') },
      { path: '/viewResume', component: () => import('src/pages/ViewResume.vue') },
      { path: '/settings', component: () => import('src/pages/Settings.vue') },
      { path: '/about', component: () => import('src/pages/About.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
