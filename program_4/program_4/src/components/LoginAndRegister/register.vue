<template>
    <div>
        <div class="register">
            <div class="top">
                <i class="icon iconfont icon-return" @click="goback"></i>
                <span @click="goregister">注册</span>
                <em @click="gologin">登陆</em>
            </div>

            <form>
                <input class="number" type="text" placeholder="请输入您的手机号/邮箱">
                <input class="code" type="password" placeholder="请输入您的密码（6位数以上）">
                <input class="verification-code" type="text" placeholder="验证码">
                <button>获取验证码</button>
                <input class="submit" type="submit" value="注册并登陆" @click="login"> 
            </form>

            <div class="notice">
                <input type="checkbox" class="check">
                <span>注册即视为您已同意<em>《服务协议》</em>和<em>《隐私条款》</em></span>
            </div>

        </div>
    </div>
</template>


<script>
    export default{
        name:'register',
        methods:{
            goback(){
                this.$router.go(-1)
            },
            goregister(){
                this.$router.push('/register')
            },
            gologin(){
                this.$router.push('/login')
            },
            login(){
                this.$router.push('/login')
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
    @import'../../assets/css/register.css';
</style>