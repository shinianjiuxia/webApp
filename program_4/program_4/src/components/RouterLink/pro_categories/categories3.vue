<template>
    <div>
        <div class="main">
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
    name:'categories3',
     methods:{
        gethash(){
            this.$router.push('/pro_list')
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
    }
}
</script>

<style scoped>

.main{
    width: 100%;
    height: auto;
    overflow: hidden;
}

.main .pro-list{
    float:right;
    width: 605px;
}


/* 不同尺寸的图片水平垂直居中 */
.main .pro-list li{
    float: left;
    width:300px;
    height: 320px;
    line-height: 300px;
    /* outline: 1px solid #000; */ 
    text-align: center;
}

/* 不同尺寸的图片水平垂直居中 */
.main .pro-list li   img{
    max-height: 100%;
    max-width: 100%;
    vertical-align: middle;
    /* outline: 1px solid #000; 图片加边框*/
}

.main .pro-list li h3{
    width: 300px;
    height: 28px;
    color: #434343;
    font-size: 24px;
    margin-top: -155px;
}

</style>