<template>
    <div class="pro-categories">

         <div class="header">
             <i class="icon iconfont icon-return" @click="goback"></i>
            <form action="###" method="post" class="search">
                <i class="icon iconfont icon-fangdajing"></i>
                <input type="text" class="text"  placeholder="请输入搜索内容">
                <input type="button" value="搜索" class="btn" >
            </form>
            <i class="icon iconfont icon-saoyisao"></i>
        </div>

        <div class="main">
            <ul class="submenu">
                <router-link to="/pro_categories/pro1" tag="li">热门搜索</router-link>
                <router-link to="/pro_categories/pro2" tag="li">国产牛皮纸</router-link>
                <router-link to="/pro_categories/pro3" tag="li">进口牛皮纸</router-link>
                <router-link to="/pro_categories/pro4" tag="li">包装牛皮纸</router-link>
                <router-link to="/pro_categories/pro5" tag="li">本色牛皮纸</router-link>
            </ul>

            <ul class="pro-list">
                <li v-for="(proList,index) in proList" :key="index" @click="gethash">
                    <img :src="proList.img" alt="">
                    <h3>{{proList.title}}</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'pro_categories',
     methods:{
        goback(){
            this.$router.go(-1)
        },
        gethash(){
            this.$router.push('/pro_details')
        }
    },
    data(){
        return{
            proList:[{
                img:'./static/img/cate1.png',
                title:'美国进口斯达牛皮纸'
            },{
                img:'./static/img/cate2.png',
                title:'韩国进口青山牛皮纸'
            },{
                img:'./static/img/cate3.png',
                title:'国产包装青山牛皮纸'
            },{
                img:'./static/img/cate4.png',
                title:'美国进口玖龙牛皮纸'
            },{
                img:'./static/img/cate5.png',
                title:'俄罗斯进口牛卡纸'
            },{
                img:'./static/img/cate6.png',
                title:'俄罗斯进口牛卡纸'
            },{
                img:'./static/img/cate7.png',
                title:'国产打包专用牛皮纸'
            },{
                img:'./static/img/cate8.png',
                title:'国产本色包装牛皮纸'
            }]
        }
    },
    created(){
        this.$store.commit('changeNavOnoff',true);
    }
}
</script>

<style scoped>
    @import'../../assets/css/pro_categories.css';
</style>
