import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/store'
        },
        {
            path: '/ebook',
            component: resolve => require(['@/views/ebook/Index'], resolve),
            children: [
                {
                    path: ':fileName',
                    component: resolve => require(['@/components/ebook/EbookReader'], resolve)
                }
            ]
        },
        {
            path: '/store',
            component: resolve => require(['@/views/store/Index'], resolve),
            redirect: '/store/home',
            children: [
                {
                    path: 'shelf',
                    component: resolve => require(['@/views/store/StoreShelf'], resolve)
                },
                {
                    path: 'category',
                    component: resolve => require(['@/views/store/StoreCategory'], resolve)
                },
                {
                    path: 'home',
                    component: resolve => require(['@/views/store/StoreHome'], resolve)
                },
                {
                    path: 'list',
                    component: resolve => require(['@/views/store/StoreList'], resolve)
                },
                {
                    path: 'detail',
                    component: resolve => require(['@/views/store/StoreDetail'], resolve)
                },
                {
                    path: 'speaking',
                    component: resolve => require(['@/views/store/StoreSpeaking'], resolve)
                },
                {
                    path: 'charge',
                    component: resolve => require(['@/views/store/StoreCharge'], resolve)
                },
                {
                    path: 'mine',
                    component: resolve => require(['@/views/store/StoreMine'], resolve)
                }
            ]
        }
    ]
})
