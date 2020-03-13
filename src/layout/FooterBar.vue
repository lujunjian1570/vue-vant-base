<template>
  <van-tabbar route :safe-area-inset-bottom="true">
    <van-tabbar-item replace to="/home">
      <svg-icon slot="icon" iconClass="404" class="icon"></svg-icon>首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/personCenter">
      <span>个人中心</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "FooterTabbar",
  data() {
    return {
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
<style lang="scss" scoped>
.icon {
  font-size: 32px;
}
</style>
