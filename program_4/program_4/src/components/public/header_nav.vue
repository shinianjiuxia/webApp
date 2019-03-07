<template>
    <div>
        <div class="top">
            <i class="icon iconfont icon-return" @click="goback"></i>
            <span>{{msg}}</span>
            <i class="icon iconfont icon-xinxi1"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'header-nav',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    },
    props:['msg']
}
</script>

<style scoped>
.top{
    width: 750px;
    height: 88px;
    background: #44a11b;
}

.top .icon-return{
    font-size: 34px;
    color: #fff;
    line-height: 88px;
    margin: 0px 262px 0px 22px;
}

.top span{
    font-size: 34px;
    color:#fff;
    margin-right: 242px;
}

.top .icon-xinxi1{
    font-size: 28px;
    color: #fff;
}
</style>
