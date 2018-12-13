import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/store'
        },
        {
            path: '/ebook',
            component: () => import('./views/ebook/Index.vue'),
            children: [
                {
                    path: ':fileName',
                    component: () => import('./components/ebook/EbookReader.vue')
                }
            ]
        },
        {
            path: '/store',
            component: () => import('./views/store/Index.vue'),
            redirect: '/store/home',
            children: [
                {
                    path: 'shelf',
                    component: () => import('./views/store/StoreShelf.vue')
                },
                {
                    path: 'category',
                    component: () => import('./views/store/StoreCategory.vue')
                },
                {
                    path: 'home',
                    component: () => import('./views/store/StoreHome.vue')
                },
                {
                    path: 'list',
                    component: () => import('./views/store/StoreList.vue')
                },
                {
                    path: 'detail',
                    component: () => import('./views/store/StoreDetail.vue')
                },
                {
                    path: 'speaking',
                    component: () => import('./views/store/StoreSpeaking.vue')
                },
                {
                    path: 'charge',
                    component: () => import('./views/store/StoreCharge.vue')
                },
                {
                    path: 'mine',
                    component: () => import('./views/store/StoreMine.vue')
                }
            ]
        }
    ]
})
