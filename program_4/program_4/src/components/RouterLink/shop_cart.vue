<template>
    <div>
        <div class="content">
            <headernav :msg="'购物车('+cartArrPay.length+')'"></headernav>
            <div class="top">
                <div class="choice" @click="picthOn">
                    <i class="iconfont icon-gou" v-if="cartArrPay.length==cartArr.length?true:false"></i>
                    <!-- picthOn 里面的条件满足之后,这里满足条件顶部的搜索框就全选 -->
                </div>
                <span>全选</span>
                <div class="edit">编辑</div>
            </div>
            <ul class="cart-list">
                <li v-for="(item,index) in cartArr" :key="index">
                    <div class="choice" @click="isonoff(index)">    
                        <!-- click="isonoff通过判断item.onoff的值每个产品是否选中 -->
                        <i class="iconfont icon-gou" v-if="item.onoff"></i>
                    </div>
                    <div class="pro-img"><img :src="item.img"></div>
                    <div class="notice">
                        <div class="max">{{item.name}}</div>
                        <div class="mini">{{item.type}}</div>
                        <div class="price">
                            <h3>&#165;{{item.newprice}} <span>&#165;{{item.oldprice}}</span></h3>  
                        </div>
                    </div>
                    <div class="num">
                        <span @click="subtract(index)">-</span>
                        <span>{{item.num}}</span>
                        <span @click="add(index)">+</span>
                    </div>
                </li>
            </ul>
            <div class="footer">
                <div class="choice">
                    <i class="iconfont icon-gou"  v-if="quanxuan"></i>
                </div>
                <div class="total">合计: <span>&#165;{{total.toFixed(2)}}</span></div>
                <div class="settlement" @click="gethash">立即结算</div>
            </div>
        </div>
    </div>
</template>

<script>
import headernav from '../public/header_nav';
export default {
    name:'shop_cart',
    components:{
        headernav
    },
    data(){
        return{
            cartArr:[{
                img:'./static/img/cart1.png',
                name:'牛皮纸大张 120g 牛皮包装纸',
                type:'牛皮纸【A4】80克',
                oldprice:38.8,
                newprice:28.8,
                pinkage:'包邮',
                sales:'月销量4785笔',
                num:1,
                onoff:true
            },{
                img:'./static/img/cart2.png',
                name:'整张全开牛皮纸1K80克120.....',
                type:'牛皮纸【A8】100克',
                oldprice:38.8,
                newprice:38.8,
                pinkage:'包邮',
                sales:'月销量4785笔',
                num:1,
                onoff:false
                          
            },{
                img:'./static/img/cart3.png',
                name:'联木正度全开/半开4开4K大度',
                type:'牛皮纸【A4】100克',
                oldprice:38.8,
                newprice:48.8,
                sales:'月销量4785笔',
                num:1,
                pinkage:'包邮',
                onoff:false
            },{
                img:'./static/img/cart4.png',
                name:'10张包邮牛皮纸 80/120/150g....',
                newName:'牛皮纸大张 120g 牛皮包装纸 正度竹浆包书纸 包装牛皮纸',
                type:'牛皮纸【A3】200克',
                newType:'一面光滑 一面粗糙',
                oldprice:38.8,
                newprice:68.8,
                sales:'月销量4785笔',
                pinkage:'包邮',
                num:1,
                onoff:false
            }],
            quanxuan:false,  //控制下面是否打钩
            cartArrPay:[],  //储存用户选中的商品信息
        }
    },
    computed:{
        total:function(){
            var num = 0;
            this.cartArrPay.filter((item,index)=>{
                num += item.num*item.newprice;
            });
            return num;
        }
    },
    watch:{
        cartArr:{  
            handler(){
                //如果商品改变  重新把改变的商品赋值给用户选中的数组
                this.cartArrPay  = this.cartArr.filter((item,index)=>{
                    return item.onoff == true;  
                });
                //console.log(this.cartArrPay);

                //判断商品是否全部选中上部打钩
                if(this.cartArrPay.length != 0){
                    this.quanxuan = true;   //商品有一个选中，底部的选中框就选中
                }else{
                    this.quanxuan = false;  //一个商品都没有选中，底部的搜索框就不勾选
                };

                this.$store.commit('changeShopCartList',this.cartArrPay); //状态管理里面,购物车选中几个商品，结算页就有几个商品
            },
            deep:true
        },
        
    },
    methods:{
        gethash(){
            this.$router.push('/confirm_order')
        },
        subtract(index){
            if(this.cartArr[index].num>1){
                this.cartArr[index].num--;
            }
        },
        add(index){
            this.cartArr[index].num++;
        },
        isonoff(index){
            this.cartArr[index].onoff =  !this.cartArr[index].onoff; //判断如果选中的点击的时候就把勾去掉，去掉的时候就选中

        },
        picthOn(){
            //点击全选按钮 控制商品是否全部选中
            this.cartArr.filter((item,index)=>{
                if( this.cartArrPay.length < this.cartArr.length ){//如果新数组的长度小于老数组，就把老数组里面data下面的cartArr下面的onoff:false 变为onoff = true
                    item.onoff = true;
                }else{
                    item.onoff = false; //反之则变为onoff = false
                }
            })
        },
    },
    created(){  //组件还为渲染到页面前 数据就准备就绪了
        this.$store.commit('changeNavOnoff',true);
        this.cartArrPay  = this.cartArr.filter((item,index)=>{ //渲染页面前 把用户选中的商品赋给新数组
            return item.onoff == true;
        });
        //console.log(this.cartArrPay);
        if(this.cartArrPay.length){   //判断新数组是否为空 不为空 下面打钩
            this.onoff = true;
        };
        this.$store.commit('changeShopCartList',this.cartArrPay);
    }
}
</script>

<style scoped>
    @import '../../assets/css/shop_cart.css';
</style>
