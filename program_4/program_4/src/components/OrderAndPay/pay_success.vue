<template>
    <div>
        <div class="pay-success">
            <headernav :msg="'支付结果'"></headernav>
            <div class="top">
                <i class="icon iconfont icon-gou1"></i>
                <h3>付款成功</h3>
                <p>已成功支付28.8元，我们将在第一时间为您发货！</p>
            </div>

            <div class="pay">
                <div class="check" @click="check">查看订单</div>
                <div class="buy" @click="buy">继续购物</div>
            </div>

            <div class="hint">
                <i class="icon iconfont icon-jingshi"></i>
                <span>  安全提醒：日泰商城不会以任何理由要求您提供银行卡信息或支付额外费用，请谨防钓鱼链接或诈骗电话，以防上当受</span>
            </div>
        </div>
    </div>
</template>

<script>
import headernav from '../public/header_nav'
export default {
    name:'pay_success',
    components:{
        headernav
    },
    methods:{
        buy(){
            this.$router.push('/home')
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
    @import '../../assets/css/pay_success.css';
</style>

