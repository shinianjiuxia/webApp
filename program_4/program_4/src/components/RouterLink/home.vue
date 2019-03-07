<template>
    <div class="home">
        <div class="header">
            <i class="icon iconfont icon-saoyisao"></i>
            <form action="###" method="post" class="search">
                <i class="icon iconfont icon-fangdajing"></i>
                <input type="text" class="text"  placeholder="请输入搜索内容">
                <input type="button" value="搜索" class="btn" >
            </form>
            <i class="icon iconfont icon-xinxi"></i>
            <span>1</span>
        </div>
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../../assets/img/banner1.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../../assets/img/banner2.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../../assets/img/banner3.png" alt=""/></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>

        
        <ul class="two-nav">
            <router-link to="/pro_categories" tag="li">
                <img src="../../assets/img/sy1.png" alt="">
                <p>国产牛皮纸</p>
            </router-link>
            <router-link to="/pro_categories" tag="li">
                <img src="../../assets/img/sy2.png" alt="">
                <p>进口牛皮纸</p>
            </router-link>
            <router-link to="/pro_categories" tag="li">
                <img src="../../assets/img/sy3.png" alt="">
                <p>包装牛皮纸</p>
            </router-link>
            <router-link to="/pro_categories" tag="li">
                <img src="../../assets/img/sy4.png" alt="">
                <p>其他牛皮纸</p>
            </router-link>
        </ul>
        
        <div class="newpro">
            <div class="top">
                <div class="icon"></div>
                <h3>最新产品</h3>
            </div>
            <ul class="pro">
                <li v-for="(item,index) in newList" :key="index" @click="gethash">
                    <img :src="item.img" alt="">
                    <div class="describe">
                        <div class="title">{{item.title}}</div>
                        <div class="wire"></div>
                        <div class="type">{{item.type}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="advertising">
            <img src="../../assets/img/mb.png" alt="">
        </div>

        <div class="recommend-pro">
            <div class="top">
                <div class="icon"></div>
                <h3>推荐产品</h3>
            </div>
            <ul class="pro">
                <li v-for="(item,index) in recommendList" :key="index" @click="gethash">
                    <div class="border">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="describe">
                        <div class="title">{{item.title}}</div>
                        <div class="price">&#165;{{item.price}}</div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="advertising">
            <img src="../../assets/img/mt.png" alt="">
        </div>

         <div class="use-pro">
            <div class="top">
                <div class="icon"></div>
                <h3>商品用途</h3>
            </div>
            <ul class="pro">
                <li v-for="(item,index) in useList" :key="index" @click="gethash">
                    <div class="border">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="describe">
                        <div class="title">{{item.title}}</div>
                        <div class="price">&#165;{{item.price}}</div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
//引进轮播图插件
import Vue from 'vue';
import Swiper from 'vue-awesome-swiper';
Vue.use(Swiper);
import 'swiper/dist/css/swiper.css';

export default {
    name:'home',
    methods:{
        gethash(){
            this.$router.push('/pro_details')
        }
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
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                effect : 'coverflow',
            },
            newList:[],
            recommendList:[],
            useList:[]
        }
    },
    created(){
        this.$axios('./static/php/home.php').then((res)=>{
            console.log(res.data);
            this.newList = res.data;
        });
        this.$axios('./static/php/home1.php').then((res)=>{
            console.log(res.data);
            this.recommendList = res.data;
        });
        this.$axios('./static/php/home2.php').then((res)=>{
            //this.info = res.data;
            console.log(res.data);
            this.useList = res.data;
        }); 
        this.$store.commit('changeNavOnoff',true);
    }
}
</script>

<style>
   @import'../../assets/css/home.css';
</style>
