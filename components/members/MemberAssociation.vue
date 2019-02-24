<template>
  <div class="center">
    <div class="assciation_left">
      <member-association-item1/>
      <member-association-item5/>
      <member-association-item2/>
      <member-association-item3/>
      <member-association-item4/>
      <member-association-item/>
    </div>
    <div class="assciation_right">
      <actitivies-frame/>
    </div>
  </div>
</template>

<script>
import MemberAssociationItem from "~/components/members/MemberAssociationItem.vue";
import MemberAssociationItem1 from "~/components/members/MemberAssociationItem.1.vue";
import MemberAssociationItem2 from "~/components/members/MemberAssociationItem.2.vue";
import MemberAssociationItem3 from "~/components/members/MemberAssociationItem.3.vue";
import MemberAssociationItem4 from "~/components/members/MemberAssociationItem.4.vue";
import MemberAssociationItem5 from "~/components/members/MemberAssociationItem.5.vue";
import ActitiviesFrame from "~/components/ActitiviesFrame.vue";
export default {
  name: "MemberAssociation",
  components: {
    MemberAssociationItem,
    MemberAssociationItem1,
    MemberAssociationItem2,
    MemberAssociationItem3,
    MemberAssociationItem4,
    MemberAssociationItem5,
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
