import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{//放所有组件共享的值
        navOnoff:true, //该状态控制是否显示底部导航&路由
        ShopCartList:[],//购物车商品列表
    },
    mutations:{//这里面放的函数用来改变state里面放的值
        changeNavOnoff(state,bool){ //bool只能传布尔值
            state.navOnoff = bool;//bool=true显示底部导航 bool=false隐藏底部导航
        },
        changeShopCartList(state,arr){//arr要存的商品列表
            state.ShopCartList = arr;
        }
    }
});

export default store;