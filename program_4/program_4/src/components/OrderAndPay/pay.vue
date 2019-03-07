<template>
    <div>
        <div class="order-main">
            <headernav :msg="'支付订单'"></headernav>
            <div class="info">
                <div class="consignee">收货人: {{address.name}}</div>
                <div class="phone">{{address.tel}}</div>
            </div>
            <div class="address">
                <div class="receiver-address">收货地址: {{address.site}} <i class="icon iconfont icon-icondayu1"></i></div>
                 <div class="remarks">{{address.site1}}</div>
            </div>
            <ul class="ShoppingInfo">
                <li v-for="(item,index) in cartArr" :key="index" class="clear">
                    <div class="buypro">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="describe">
                            <div class="proname">{{item.name}}</div>
                            <div class="trait">{{item.type}}</div>
                            <div class="price">&#165;{{item.newprice}}</div>
                            <div class="bottom">
                                <div class="postage">{{item.pinkage}}</div>
                                <div class="notice">{{item.sales}}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="orderinfo">
                <li>产品数量<span>{{totalNum}}</span></li>
                <li>配送方式<span>顺丰快递</span></li>
                <li>快递运费<span>￥:0.00</span></li>
                <li>价格合计<span>&#165;{{totalPrice.toFixed(2)}}</span></li>
            </ul>

            <div class="payment">
                <h3>选择付款方式</h3>
                <div class="pay">
                    <div class="bankcard">
                        <img src="../../assets/img/dd2.png" alt="">
                        <span>银行卡支付</span>
                        <div class="choice">
                            <i class="iconfont icon-gou"></i>
                        </div>
                    </div>

                    <div class="wechat">
                        <img src="../../assets/img/dd3.png" alt="">
                        <span>微信支付</span>
                        <div class="choice">
                            <!-- <i class="iconfont icon-gou"></i> -->
                        </div>
                    </div>

                    <div class="alipay">
                        <img src="../../assets/img/dd4.png" alt="">
                        <span>支付宝支付</span>
                        <div class="choice">
                            <!-- <i class="iconfont icon-gou"></i> -->
                        </div>
                    </div>

                </div>
                    
            </div>

            <div class="footer">
                <div class="num">合计: <span>&#165;{{totalPrice.toFixed(2)}}</span></div>
                <div class="payorder" @click="gethash">支付订单</div>
            </div>


        </div>
            
    </div>
</template>

<script>
import headernav from '../public/header_nav'

export default {
    name:'pay',
    components:{
        headernav
    },
    methods:{
        gethash(){
            this.$router.push('/order')
        }
    },
    data(){
        return{
            address:{name:'安吉丽娜',tel:'18756984125',site:'广西省南宁市西乡塘区上饶街道213号猜猜小区1栋',site1:'（收货不便时，可选择免费待收货服务）'},
              //  cartArr:[{
            //     img:'./static/img/cart1.png',
            //     name:'牛皮纸大张 120g 牛皮包装纸',
            //     type:'牛皮纸【A4】80克',
            //     oldprice:38.8,
            //     newprice:28.8,
            //     pinkage:'包邮',
            //     sales:'月销量4785笔',
            //     num:1,
            //     onoff:true
            // }] 
            cartArr:[]
        }
    },
    computed:{
        totalPrice(){
            var total = 0;
            this.cartArr.filter((item,index)=>{
                total += item.newprice*item.num;
            });
            return total;
        },
        totalNum(){
            var num = 0;
            this.cartArr.filter((item,index)=>{
                num += item.num;
            });
            return num;
        }
    },
    watch:{
        cartArr:{
            handler(){
                this.$store.commit('changeShopCartList',this.cartArr);
            },
            deep:true
        }
    },
    created(){
        this.$store.commit('changeNavOnoff',false);
        this.cartArr = this.$store.state.ShopCartList;
    }
}
</script>

<style scoped>
    @import'../../assets/css/pay.css';
</style>
