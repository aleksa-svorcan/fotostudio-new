
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'vencanja', component: () => import('pages/PageGallery.vue') },
      { path: 'krstenja', component: () => import('pages/PageGallery.vue') },
      { path: 'rodjendani', component: () => import('pages/PageGallery.vue') },
      { path: 'punoletstva', component: () => import('pages/PageGallery.vue') },
      { path: 'korporativne-fotografije', component: () => import('pages/PageGallery.vue') }
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
