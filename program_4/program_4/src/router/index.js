import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//底部路由导航
import home from '../components/RouterLink/home.vue';
import shop_cart from '../components/RouterLink/shop_cart.vue';
import user from '../components/RouterLink/user.vue';
import pro_search from '../components/RouterLink/pro_search.vue';

//产品分类
import pro_categories from '../components/RouterLink/pro_categories.vue';
import categories1 from '../components/RouterLink/pro_categories/categories1.vue';
import categories2 from '../components/RouterLink/pro_categories/categories2.vue';
import categories3 from '../components/RouterLink/pro_categories/categories3.vue';
import categories4 from '../components/RouterLink/pro_categories/categories4.vue';
import categories5 from '../components/RouterLink/pro_categories/categories5.vue';


//登陆和注册
import login from '../components/LoginAndRegister/login.vue';
import register from '../components/LoginAndRegister/register.vue';

//确认订单和支付相关页面
import confirm_order from '../components/OrderAndPay/confirm_order.vue';
import pay from '../components/OrderAndPay/pay.vue';
import pay_success from '../components/OrderAndPay/pay_success.vue';
import pay_failure from '../components/OrderAndPay/pay_failure.vue';
import order from '../components/OrderAndPay/order.vue';

//产品列表和产品详情
import pro_list from '../components/pro_list.vue';
import pro_details from '../components/pro_details.vue';

export default new Router({
  routes: [{
    //底部导航路由
    path:'/home',
    component:home
  },{
    path:'/pro_categories/',
    component:pro_categories,  //专业类别
    children:[{
      path:'pro1',
      component:{categories1}
    },{
      path:'pro2',
      component:{categories2}
    },{
      path:'pro3',
      component:{categories3}
    },{
      path:'pro4',
      component:{categories4}
    },{
      path:'pro5',
      component:{categories5}
    },{
      path:'/',
      redirect:'/pro_categories/pro1'
    }]
  },{
    path:'/shop_cart',
    component:shop_cart
  },{
    path:'/user',
    component:user
  },{
    path:'/pro_search',
    component:pro_search
  },{
    //登陆和注册路由
    path:'/login',
    component:login
  },{
    path:'/register',
    component:register
  },{
    //确认订单和支付相关页面路由
    path:'/confirm_order',
    component:confirm_order
  },{
    path:'/pay',
    component:pay  
  },{
    path:'/pay_success',
    component:pay_success  
  },{
    path:'/pay_failure',
    component:pay_failure  
  },{
    path:'/order',
    component:order  
  },{
    //产品列表和产品详情路由
    path:'/pro_list',
    component:pro_list 
  },{
    path:'/pro_details',
    component:pro_details
  },{
    path:'/',
    redirect:'/home'
  }
  ]
})
