<template>
  <div>
    <tab
      id="idTabTool"
      :line-width="1"
      active-color="#fc378c"
      v-model="index"
      scroll-threshold="2"
      class="tab-style"
    >
      <tab-item
        :selected="demo2 === item"
        v-for="(item, index) in list2"
        @click="demo2 = item"
        :key="index"
        class="tab-item-style"
      >{{item}}</tab-item>
    </tab>

    <swiper v-model="index" :show-dots="false" ref="homePage">
      <swiper-item :key="0" class="swiper-slide">
        <div>
          <MemberAssociation/>
        </div>
      </swiper-item>
      <swiper-item :key="1" class="swiper-slide">
        <div>
          <member-company/>
        </div>
      </swiper-item>
      <swiper-item :key="2" class="swiper-slide">
        <div>
          <MemberExperts/>
        </div>
      </swiper-item>
      <swiper-item :key="3" class="swiper-slide">
        <div>
          <MemberJoinUs/>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {
  Tab,
  TabItem,
  Sticky,
  Divider,
  XButton,
  Swiper,
  SwiperItem
} from "vux";
import MemberAssociation from "~/components/members/MemberAssociation.vue";
import MemberCompany from "~/components/members/MemberCompany.vue";
import MemberExperts from "~/components/members/MemberExperts.vue";
import MemberJoinUs from "~/components/members/MemberJoinUs.vue";
const list = () => ["Association", "Companies", "Experts", "Join us"];

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
    MemberAssociation,
    MemberCompany,
    MemberExperts,
    MemberJoinUs
  },
  data() {
    return {
      index01: 0,
      list2: list(),
      demo2: "美食",
      index: 0,
      clientHeight: "",
      headToolHeight: "",
      tabToolHeight: ""
    };
  },
  methods: {
    switchTabItem(index) {
      console.log("on-before-index-change", index);
      this.$vux.loading.show({
        text: "loading"
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.index01 = index;
      }, 1000);
    },
    onItemClick(index) {
      console.log("on item click:", index);
    },
    addTab() {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1);
      }
    },
    removeTab() {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1);
      }
    },
    next() {
      if (this.index === this.list2.length - 1) {
        this.index = 0;
      } else {
        ++this.index;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = this.list2.length - 1;
      } else {
        --this.index;
      }
    },
    changeFixed(clientHeight, headToolHeight, tabToolHeight) {
      //动态修改样式
      console.log(clientHeight);
      this.$refs.homePage.height =
        clientHeight - headToolHeight - tabToolHeight + "px";
    }
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`; //document.body.clientWidth;
    this.headToolHeight = `${
      document.getElementById("idHeadTool").clientHeight
    }`; //document.body.clientWidth;
    this.tabToolHeight = `${document.getElementById("idTabTool").clientHeight}`; //document.body.clientWidth;

    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
      this.headToolHeight = `${
        document.getElementById("idHeadTool").clientHeight
      }`; //document.body.clientWidth;
      this.tabToolHeight = `${
        document.getElementById("idTabTool").clientHeight
      }`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(
        this.clientHeight,
        this.headToolHeight,
        this.tabToolHeight
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";

.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}

.swiper-slide {
  overflow-y: scroll;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .tab-item-style {
    background-color: red;
    padding-left: 3%;
    padding-right: 3%;
  }
  .tab-style {
    background-color: red;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .tab-item-style {
    background-color: orange;
    padding-left: 3%;
    padding-right: 3%;
  }
  .tab-style {
    background-color: orange;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .tab-item-style {
    background-color: yellow;
    padding-left: 3%;
    padding-right: 3%;
  }
  .tab-style {
    background-color: yellow;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .tab-item-style {
    background-color: green;
  }
  .tab-style {
    background-color: green;
  }
}
</style>