<template>
  <div class="center">
    <div class="assciation_left">
      <member-association-item v-for="n in 7" :key="n"/>
    </div>
    <div class="assciation_right">
      <actitivies-frame/>
    </div>
  </div>
</template>

<script>
import MemberAssociationItem from "~/components/members/MemberAssociationItem.vue";
import ActitiviesFrame from "~/components/ActitiviesFrame.vue";
export default {
  name: "MemberAssociation",
  components: {
    MemberAssociationItem,
    ActitiviesFrame
  }
};
</script>

<style>
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
</style>
