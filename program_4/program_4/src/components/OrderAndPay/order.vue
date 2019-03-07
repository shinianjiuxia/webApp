<template>
    <div class="wrap">
        <headernav :msg="'我的订单'"></headernav>
        <ul class="menu">
            <li v-for="(menu,index) in menu" :key="index" @click="changeshow(index)" :class="{'nav-li-active':navNum==index?true:false}">
                {{menu}}
            </li>
        </ul>

       <ul class="order-list">
           <li v-for="(orderList,index) in orderList" :key="index">
               <div class="info">
                    <span>订单号:{{orderList.number}}</span>
                    <span>下单时间:{{orderList.time}}</span>
                    <span>{{orderList.condition}}</span>
               </div>
               <div class="pro">
                   <div class="img">
                       <img :src="orderList.img" alt="">
                   </div>
                   <h3>{{orderList.title}}</h3>
                   <p>{{orderList.type}}</p>
                   <div class="price-info">
                       <div class="price">&#165;{{orderList.price}}</div>
                       <div class="detal">{{orderList.detial}}</div> 
                   </div>
                   <div class="discounts">
                       <div class="postage">{{orderList.postage}}</div>
                       <div class="sale">{{orderList.sales}}</div>
                       <div class="evaluate" @click="other(orderList.pay.state)">{{orderList.pay.msg}}</div>
                   </div>
               </div>
           </li>
       </ul>

    </div>
</template>

<script>
import headernav from '../public/header_nav'
export default {
    name:'order',
    components:{
        headernav
    },
    methods:{
        changeshow(index){
            this.navNum = index;
        },
        other(num){
            if(num == 1){//状态1是评价页面，这里没有页面跳转首页
                this.$router.push('/home')
            }else if(num == 2){//状态2是支付页面
                this.$router.push('/pay')
            }else if(num == 3){//状态3是去收获页面,这里没有页面跳转首页
                this.$router.push('/home')
            }
        }
    },
    data(){
        return{
            menu:['全部订单','待付款','待收货','待发货','待评价'],
            navNum:0,
            orderList:[{
                number:485220171212452,
                time:2017-12-12,
                condition:'已签收',
                img:'./static/img/dd1.png',
                title:'卷筒制版牛皮纸大张打版纸 整卷服装打样纸 定制长度包装纸',
                type:'一面光滑 一面粗糙 ',
                price:58.8,
                detial:'订单详情>>',
                postage:'包邮',
                sales:'月销量4785笔',
                pay:{state:1,msg:'去评价>>'},
            },{
                number:485220171213452,
                time:2017-12-13,
                condition:'已下单',
                img:'./static/img/tj5.png',
                title:'全开大张复古牛皮纸 食品中药品包装纸服装打版包书皮包装纸',
                type:'一面光滑 一面粗糙 ',
                price:28.8,
                detial:'订单详情>>',
                postage:'包邮',
                sales:'月销量4785笔',
                pay:{state:2,msg:'去付款>>'}, 
            },{
                number:485220171213452,
                time:2017-12-15,
                condition:'已收货',
                img:'./static/img/cart1.png',
                title:'250克g荷兰白卡纸A4A3+/A2/A5牛皮卡纸厚硬手工黑色白色卡纸',
                type:'一面光滑 一面粗糙 ',
                price:28.8,
                detial:'订单详情>>',
                postage:'包邮',
                sales:'月销量4785笔',
                pay:{state:3,msg:'去收货>>'}, 
            },{
                number:485220171213452,
                time:2017-12-16,
                condition:'已收货',
                img:'./static/img/fl6.png',
                title:'A3+A4A5牛皮纸账本凭证封面纸牛皮包装纸打印纸厚硬牛卡纸',
                type:'一面光滑 一面粗糙 ',
                price:38.8,
                detial:'订单详情>>',
                postage:'包邮',
                sales:'月销量4785笔',
                pay:{state:1,msg:'去评价>>'}, 
            },{
                number:485220171213452,
                time:2017-12-16,
                condition:'已收货',
                img:'./static/img/fl4.png',
                title:'牛皮纸大张 120g 牛皮包装纸 正度竹浆包书纸 包装牛皮纸',
                type:'一面光滑 一面粗糙 ',
                price:18.8,
                detial:'订单详情>>',
                postage:'包邮',
                sales:'月销量4785笔',
                pay:{state:1,msg:'去评价>>'},   
            }]
        }
    },
    created(){
        this.$store.commit('changeNavOnoff',false);
    }
}

/*
arr[{
    obj:{
        obj:{
            obj:{
                arr:['str']
            }
        }
    }
},{}]

arr[0].obj.obj.obj.arr[0]
*/

</script>

<style scoped>
    @import'../../assets/css/order.css';
</style>
