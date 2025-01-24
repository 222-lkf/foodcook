<template>
  <div class="cart">
    <div class="content">  
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="less" scoped>
.cart{
  display: flex;
  flex-direction: column;
  height: 100%;
  .content{
    margin-top: auto;
  }
}
</style>