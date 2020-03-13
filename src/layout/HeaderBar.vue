<template>
  <!-- <van-nav-bar title="标题" left-text="返回">
    <svg-icon slot="left" iconClass="404" class="icon"></svg-icon>
    <svg-icon slot="right" iconClass="404" class="icon"></svg-icon>
  </van-nav-bar> -->
  <div id="HeaderBar">
    <van-nav-bar :title="title" :left-arrow="isleftarrow" @click-left="onClickLeft" />
  </div>
</template>
<script>
export default {
  name: "HeaderTabbar",
  // title：用来显示导航栏的title，isleftarrow用来显示导航栏的左侧返回箭头
  props: ["title","isleftarrow"],
  data() {
    return {};
  },
  components: {},
  mounted() {
    console.log(1);
  },
  methods: {
    onClickLeft() {
      // 点击回退的时候当做地址回退
      this.$router.goBack();
    }
  }
};
</script>
<style lang="scss" scoped>
#HeaderBar {
  position: fixed;
  top: 0;
  left: 0;
  height: $headerBarH;
  line-height: $headerBarH;
  width:100%;
  z-index: 100;
}
.van-nav-bar{
  font-size: 18px!important;
  /* 设置导航栏的渐变色 */
  background: linear-gradient(to right, #ff2e29, #fe6e49)!important;
  background: -webkit-linear-gradient(to right, #ff2e29, #fe6e49)!important;
  border:0;
}
.van-hairline--bottom::after {
     /* 去除导航栏底部的白色横线 */
    border-bottom-width: 0px!important;
}
</style>
