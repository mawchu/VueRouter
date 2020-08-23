//官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';
//自訂的分頁元件
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
// 巢狀分頁元件
import Child1 from '@/components/pages/child1';
import Child2 from '@/components/pages/child2';
import Child3 from '@/components/pages/child3';


Vue.use(VueRouter);

export default new VueRouter({
    routes:[//路由資料的陣列
        {
            name:'首頁',//元件呈現的名稱
            path:'/home',//對應的虛擬路徑
            component: Home,//對應的元件
        },
        {
            // name:'分頁', //vue渲染建議刪除此名稱 不然會覆蓋掉巢狀分頁的'卡片1'
            path:'/page',
            component: Page,
            children:[
                {
                    name:'卡片1',//元件呈現的名稱
                    path:'',//對應的虛擬路徑
                    component: Child1,//對應的元件
                },
                {
                    name:'卡片2',//元件呈現的名稱
                    path:'child2',//對應的虛擬路徑
                    component: Child2,//對應的元件
                },
                {
                    name:'卡片3',//元件呈現的名稱
                    path:'child3',//對應的虛擬路徑
                    component: Child3,//對應的元件
                },
            ]
        }
    ]
});

