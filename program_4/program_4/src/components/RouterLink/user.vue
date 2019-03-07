<template>
    <div class="user">
        <headernav :msg="'个人中心'"></headernav>
        <div class="info">
            <img src="../../assets/img/tx.png" alt="">
            <div class="grade">
                <div class="name">小也橘</div>
                <div class="rank">
                    <p>LV.9</p>
                    <img src="../../assets/img/jdt.png" alt="">
                </div>
                <div class="manage">
                    <span>账户管理</span>
                    <i class="icon iconfont icon-icondayu1"></i>
                </div>
            </div>
        </div>
        <ul class="nav">
           <li>
               <img src="../../assets/img/dfk.png" alt="">
               <h3>待付款</h3>
           </li>
           <li>
               <img src="../../assets/img/dsh.png" alt="">
               <h3>待收货</h3>
           </li>
           <li>
               <img src="../../assets/img/pj.png" alt="">
               <h3>待评价</h3>
           </li>
           <li>
               <img src="../../assets/img/tk.png" alt="">
               <h3>退换/售后</h3>
           </li>
        </ul>

        <ul class="myinfo">
            <li>
                <span>我的订单</span>
                <i class="icon iconfont icon-icondayu1"></i>
            </li>
            <li>
                <span>收货地址管理</span>
                <i class="icon iconfont icon-icondayu1"></i>
            </li>
            <li>
                <span>购买记录</span>
                <i class="icon iconfont icon-icondayu1"></i>
            </li>
            <li>
                <span>修改个人资料</span>
                <i class="icon iconfont icon-icondayu1"></i>
            </li>
            <li>
                <span>我的评价</span>
                <i class="icon iconfont icon-icondayu1"></i>
            </li>
            <li>
                <span>设置</span>
                <i class="icon iconfont icon-icondayu1"></i>
            </li>
        </ul>

    </div>
</template>

<script>
import headernav from '../public/header_nav'
export default {
    name:'user',
    components:{
        headernav
    },
    data(){
        return{

        }
    },
    created(){
        this.$store.commit('changeNavOnoff',true);
    }
}
</script>

<style scoped>
    @import'../../assets/css/user.css';
</style>
