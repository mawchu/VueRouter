//官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';
//自訂的分頁元件
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[//路由資料的陣列
        {
            name:'首頁',
            path:'/home',
            component: Home,
            meta: {
                title: '我是首頁'
              }
          
        },
        {
            name:'分頁',
            path:'/page',
            component: Page,
            meta: {
                title: '我是分頁'
              }
          
        }
    ]
});

