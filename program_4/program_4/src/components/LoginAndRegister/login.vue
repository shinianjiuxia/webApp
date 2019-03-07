<template>
    <div>
        <div class="register">
            <div class="top">
                <i class="icon iconfont icon-return" @click="goback"></i>
                <span @click="gologin">登陆</span>
                <em @click="goregister">注册</em>
            </div>

            <form>
                <input class="number" type="text" placeholder="请输入您的手机号/邮箱">
                <input class="code" type="password" placeholder="请输入您的密码（6位数以上）">
                <a href="">找回密码?</a>
                <input class="verification-code" type="text" placeholder="验证码">
                <button>获取验证码</button>
                <input class="submit" type="submit" value="登陆" @click="login"> 
            </form>

            <div class="other">
                <h3>其他登陆方式</h3>
                <div class="qq">
                    <img src="../../assets/img/qq1.png" alt="">
                    <span>QQ登陆</span>
                </div>
                <div class="wechat">
                    <img src="../../assets/img/wx.png" alt="">
                    <span>微信登陆</span>
                </div>
                <div class="alipay">
                    <img src="../../assets/img/zf.png" alt="">
                    <span>支付宝登陆</span>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    export default{
        name:'login',
        methods:{
            goback(){
                this.$router.go(-1)
            },
            gologin(){
                this.$router.push('/login')
            },
            goregister(){
                this.$router.push('/register')
            },
            login(){
                this.$router.push('/home')
            }
        },
        data(){
            return {

            }
        },
        created(){
            this.$store.commit('changeNavOnoff',false);
        }
    }
</script>


<style scoped>
    @import'../../assets/css/login.css';
</style>