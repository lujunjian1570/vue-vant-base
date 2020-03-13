<template>
  <div>
    <!-- <header-bar></header-bar> -->
    <header-bar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></header-bar>
    <div style="height:100%;" :class="[{child: navShow},isFooterBar ? paddingbottom : '']">
      <transition :name="transitionName">
        <router-view class="router"></router-view>
      </transition>
    </div>
    <footer-bar v-if="isFooterBar"></footer-bar>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
export default {
  props: {},
  data() {
    return {
      title: "",
      isleftarrow: "",
      transitionName: "",
      navShow: true,
      isFooterBar: false,
      paddingbottom: "paddingbottom",
      isNoTransition: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    HeaderBar,
    FooterBar
  },
  watch: {
    $route(to, from) {
      this.title = to.meta.title;
      this.isleftarrow = to.meta.isleftarrow;
      this.isFooterBar = this.$route.meta.isFooterBar;
      this.isNoTransition = this.$route.meta.isNoTransition;
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (!this.isNoTransition) {
        if (isBack) {
          this.transitionName = "slide-right";
        } else {
          this.transitionName = "slide-left";
        }
      }else{
        this.transitionName = ""
      }
      this.$router.isBack = false;
    }
  },
  mounted() {
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
    this.isFooterBar = this.$route.meta.isFooterBar;
    this.isNoTransition = this.$route.meta.isNoTransition;
  }
};
</script>

<style scoped lang="scss">
.paddingbottom {
  padding-bottom: 50px;
}

#router_box {
  position: relative;
  height: 100%;
}
.router {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  transition: all 0.5s ease;
  box-shadow: -2px 0 30px rgba(0, 0, 0, 0.1);
}
.child {
  height: 100%;
  padding-top: 100px;
}
.child > div {
  height: 93%;
  height: calc(100% - 46px);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100% 0);
}
</style>
