<template>
    <div class="pay-failure">
        <headernav :msg="'支付结果'"></headernav>   
        <div class="top">
           <i class="icon iconfont icon-cha"></i>
           <h3>付款失败</h3>
           <p>您的订单支付失败，我们将会为您保留订单24小时</p>
           <p>24小时之后还未付款，系统将自动取消该订单。</p>
        </div>

        <div class="pay">
            <div class="again" @click="repeat">重新支付</div>
            <div class="order" @click="check">订单详情</div>
        </div>

        <div class="hint">
            <i class="icon iconfont icon-jingshi"></i>
            <span>  安全提醒：日泰商城不会以任何理由要求您提供银行卡信息或支付额外费用，请谨防钓鱼链接或诈骗电话，以防上当受</span>
        </div>

    </div>
</template>

<script>
import headernav from '../public/header_nav';
export default {
    name:'pay_failure',
    components:{
        headernav
    },
    methods:{
        repeat(){
            this.$router.push('/pay')
        },
        check(){
            this.$router.push('/order')
        }

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
    @import '../../assets/css/pay_failure.css';
</style>
