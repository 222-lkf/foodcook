<template>
  <div class="footer">
    <div class="item"><router-link to="/home" class="nav-item" active-class="nav-color">
      <van-icon name="wap-home-o" />
      首页</router-link>
    </div>
    <div class="item" ><router-link to="/order" class="nav-item" active-class="nav-color">
      <van-icon name="bill-o" />
      订单</router-link>
    </div>
    <div class="item" ><router-link to="/cart" class="nav-item" active-class="nav-color">
      <van-icon name="shopping-cart-o" />
      购物车</router-link>
    </div>
    <div class="item" ><router-link to="/mine" class="nav-item" active-class="nav-color">
      <van-icon name="manager-o" />
      我的</router-link>
    </div>
  </div>
</template>   

<style lang="less" scoped>
.footer{
  display: flex;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  .item{
    flex: 1;
    .nav-item{
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .nav-color{
      color: rgb(29, 111, 204);
    }
    
  }
}
</style>
