<template>
    <div class="pro_details">
        <headernav1 :msg="'产品详情'"></headernav1>
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/img/probanner.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/img/probanner.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/img/probanner.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/img/probanner.png" alt=""/></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>

        <div class="details">
            <h3>{{details.name}}</h3>
            <div class="price">&#165;{{details.price}}</div>
            <div class="inventory">
                <div class="num">
                    <span @click="subtract">-</span>
                    <span>{{details.num}}</span>
                    <span @click="add">+</span>
                </div>
                <div class="total">库存: 1250</div>
            </div>
            <ul>
                <li>邮费: <span>{{details.postage}}</span></li>
                <li>月销: {{details.sale}} 笔</li>
                <li>发货地址: {{details.address}}</li>
            </ul>
        </div>

        <div class="promotion">
            <p><span>促销</span>　单笔订单买三送一</p>
            <p><span>积分</span>　购买一笔可获得300积分,两笔600积分,以此累计</p>
            <div class="promise">
                <span><i class="icon iconfont icon-xiaoyuandian"></i>送货上门</span>
                <span><i class="icon iconfont icon-xiaoyuandian"></i>正品保证</span>
                <span><i class="icon iconfont icon-xiaoyuandian"></i>七天退换</span>
            </div>
        </div>

        <div class="pro-pic">
            <img src="../assets/img/xq1.png" alt="">
            <img src="../assets/img/xq2.png" alt="">
            <img src="../assets/img/xq3.png" alt="">
            <img src="../assets/img/xq4.png" alt="">
            <img src="../assets/img/xq5.png" alt="">
        </div>

        <div class="footer">
                <div class="shop"><i class="icon iconfont icon-dianpu"></i><span>店铺</span></div>
                <div class="collect"><i class="icon iconfont icon-xin"></i><span>收藏</span></div>
                <div class="cart" @click="getCart">加入购物车</div>
                <div class="buy" @click="getBuy">立即购买</div>
        </div>


    </div>
</template>

<script>

//引进轮播图插件
import Vue from 'vue';
import Swiper from 'vue-awesome-swiper';
Vue.use(Swiper);
import 'swiper/dist/css/swiper.css';
import headernav1 from './public/header_nav1';

export default {
    name:'pro_details',
    components:{
        headernav1
    },
    data(){
        return{
            swiperOption:{
                direction:'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                loop:true,
                // autoplay: {
                //     delay: 3000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false,
                // },
                effect : 'coverflow',
            },
            details:{
                name:'青山牛皮纸（3000/T）',
                price:'50.8',
                num:1,
                total:1250,
                postage:'包邮',
                sale:888,
                address:'南宁'
            }
        }
    },
    methods:{
        getCart(){
            this.$router.push('/shop_cart')
        },
        getBuy(){
            this.$router.push('/pay')
        },
        subtract(){
            if(this.details.num>1){
                this.details.num--;
            }
        },
        add(index){
            this.details.num++;
        }

    },
    created(){
        this.$store.commit('changeNavOnoff',false);
    }
}
</script>

<style scoped>
    @import'../assets/css/pro_details.css';
</style>
