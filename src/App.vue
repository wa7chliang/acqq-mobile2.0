<template>
  <div>
    <v-header :head="head"></v-header>
    <section class="mod-tab">
        <div class="tab-list">
            <router-link to="/dev" replace class="tab-list-item">详情</router-link>
            <router-link to="/menu" replace class="tab-list-item">目录</router-link>
            <router-link to="/tall" replace class="tab-list-item">评论</router-link>              
        </div>
     </section>
     <keep-alive>
        <router-view :head="head"></router-view>
     </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header';

export default {
  data(){
    return {
      head:{}
    }
  },
  created(){
    this.$http.get('/api/head').then((rep)=>{
      rep = rep.body;
      if(rep.errno == 0){
        this.head = rep.data;
      }
    });
  },
  components:{
    'v-header':header
  }
}
</script>

<style lang="less">
  //标签切换开始
  .mod-tab{
      height: 2.25rem;
      background: #ffffff;
      border-bottom: 1px solid #F5F5EE;
      width: 100%;
      .tab-list{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          .tab-list-item{
              display: block;
              width: 5.75rem;
              text-align: center;
              height: 2.25rem;
              line-height: 2.25rem;
              font-size: 0.75rem;
              position: relative;
              color: #969696;
          }
          .active{
              color: #535252;
              &::after{
                  content: '';
                  width: 0.5rem;
                  height: 0.15rem;
                  left: 2.625rem;
                  bottom: 0;
                  position: absolute;
                  background-color: #ff9a6a;
                  border-radius: 0.15rem;
                  display: block;
              }
          }
      }
  }
  //标签切换结束
  @import "./common/less/screen";

</style>
