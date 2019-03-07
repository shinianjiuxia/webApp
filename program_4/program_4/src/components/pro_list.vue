<template>
    <div>
        <div class="pro-list">
            <headernav1 :msg="'斯达牛皮纸'"></headernav1>
            <ul class="menu">
                <li v-for="(item,index) in menu" :key="index" @click="changeshow(index)" :class="{'nav-li-active':navNum==index?true:false}">
                    {{item}}
                </li>
            </ul>
            <ul class="pro">
                <li v-for="(proList,index) in proList" :key="index">
                    <img :src="proList.img" alt="">
                    <h3>{{proList.title}}</h3>
                    <div class="sale">
                        <span class="price">&#165;{{proList.price}}</span>
                        <span>{{proList.sale}}</span>
                         <i class="icon iconfont icon-gouwuche"></i>
                    </div>
                </li>
            </ul>
            <div class="none">没有啦~</div>
        </div>
    </div>
</template>

<script>
import headernav1 from './public/header_nav1'
export default {
    components:{
        headernav1
    },
    name:'pro_list',
    data(){
        return{
            menu:['综合','销量','价格','筛选'],
            navNum:0,
            proList:[]
        }
    },
    methods:{
        changeshow(num){
            this.navNum = num
        }
    },
    created(){
        this.$store.commit('changeNavOnoff',false);
        this.$axios('./static/php/pro_list.php').then((res)=>{//箭头函数是让this的指向和父级一样
            // console.log(res.data)
            this.proList = res.data;
        })
    }
}
</script>

<style scoped>
    @import '../assets/css/pro_list.css';
</style>

