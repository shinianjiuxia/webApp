<template>
    <div class="pro_search">
        <div class="header">
             <i class="icon iconfont icon-return" @click="goback"></i>
            <form action="###" method="post" class="search">
                <i class="icon iconfont icon-fangdajing"></i>
                <input type="text" class="text"  :placeholder="ok?'请输入搜索内容':''"   @focus="dd" @blur="da"> 
                dd为
                <input type="button" value="搜索" class="btn" >
            </form>
            <i class="icon iconfont icon-saoyisao"></i>
        </div>
        <div class="hot">
            <h3><i class="icon iconfont icon-huo"></i>热门搜索</h3>
        </div>

        <ul class="search">
            <li v-for="(item,index) in hot" :key="index" @click="gopro(item)">
                {{item}}
            </li>
        </ul>

        <div class="eliminate" @click="clearhistory" >清空搜索历史</div>

    </div>
</template>

<script>
export default {
    name:'pro_search',
    methods:{
        goback(){
            this.$router.go(-1)
        },
        clearhistory(){
            this.hot = []
        },
        gopro(name){ //解释
            this.$router.push('./pro_list?name='+name)
            //console.log(this.$route)
            //alert()
        },
        dd(){
            this.ok = false
        },
        da(){
            this.ok = true
        }
    },
    data(){
        return{
            hot:['青山牛皮纸','泰格牛皮纸','斯达牛皮纸','玖龙牛皮纸','美国牛卡纸','进口牛皮纸','单面牛皮纸','双面牛皮纸','国产牛皮纸','包装牛皮纸'],
            ok:true,
        }
    },
    created(){
        this.$store.commit('changeNavOnoff',false);
    }
    
}
</script>

<style scoped>
    @import '../../assets/css/pro_search.css';
</style>
