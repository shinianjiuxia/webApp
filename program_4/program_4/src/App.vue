<template>
  <div id="app">  
    <ul class="app-list" v-show="onoff">
      <router-link to="/home" tag="li">
        <i class="icon iconfont icon-home"></i>
        <span>主页</span>
      </router-link>
      <router-link to="/pro_categories" tag="li">
        <i class="icon iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/shop_cart" tag="li">
        <i class="icon iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/user" tag="li">
        <i class="icon iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      onoff:true
    }
  },
  components:{

  },
  methods:{

  },
  updated(){
    this.onoff = this.$store.state.navOnoff;
  }

}
</script>

<style>
  @import './assets/fonts/iconfont.css';
  #app{
    width: 750px;
    height: 100%;
  }
  .app-list{
    width: 100%;
    height:98px;
    background: #288300;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .app-list li {
    float: left;
    width: 25%;
    font-size: 24px;
    text-align: center;
  }

  .app-list li .iconfont{
    padding:12px 0 5px 0;
    font-size: 46px;
    display: block;
    color:#3fcc00; 
  }

  .app-list li span{
    font-size: 24px;
    color:#3cc200;
    display: block;
  }
  .router-link-active .iconfont{
    color:#fff!important;
  }
  .router-link-active{
    color:#fff!important;
  }

  .router-link-active span{
    color:#fff!important;
  }
</style>
