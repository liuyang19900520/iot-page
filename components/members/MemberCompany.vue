<template>
  <div class="center">
    <div class="assciation_left">
      <member-company-item/>
      <member-company-item1/>
    </div>
    <div class="assciation_right">
      <actitivies-frame/>
    </div>
  </div>
</template>

<script>
import MemberCompanyItem from "~/components/members/MemberCompanyItem.vue";
import MemberCompanyItem1 from "~/components/members/MemberCompanyItem.1.vue";

import ActitiviesFrame from "~/components/ActitiviesFrame.vue";
export default {
  name: "MemberAssociation",
  components: {
    MemberCompanyItem,
    MemberCompanyItem1,
    ActitiviesFrame
  }
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start; /*水平居中*/
}

.assciation_right {
  width: 25%;
  justify-content: flex-start;
  padding: 2%;
}
.assciation_left {
  width: 75%;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .assciation_right {
    display: none;
  }
  .assciation_left {
    width: 100%;
    margin-bottom: 5%;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .assciation_right {
    display: none;
  }
  .assciation_left {
    width: 100%;
    margin-bottom: 5%;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .assciation_right {
    display: none;
  }
  .assciation_left {
    width: 100%;
    margin-bottom: 5%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .assciation_right {
    display: none;
  }
  .assciation_left {
    width: 100%;
    margin-bottom: 5%;
  }
}
</style>
