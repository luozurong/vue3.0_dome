<template>
  <div>
    <router-view></router-view>
    <div class="nav-bar van-hairline--top">
      <ul class="nav-list">
        <router-link tag="li" class="nav-list-item" to="/">
          <span>首页</span>
        </router-link>
        <router-link tag="li" class="nav-list-item" to="product">
          <span>分类</span>
        </router-link>
        <router-link tag="li" class="nav-list-item" to="cart">
          <span>购物车</span>
        </router-link>
        <router-link tag="li" class="nav-list-item" to="mine">
          <span>我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'entry',
  setup () {
    const state = reactive({
      name: 11
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../common/style/mixin.less';
.nav-bar{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-exact-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-size: 22px;
      }
      span{
        font-size: 12px;
      }
      .van-icon-shopping-cart-o {
        margin: 0 auto;
        margin-bottom: 2px;
      }
    }
  }
}
</style>