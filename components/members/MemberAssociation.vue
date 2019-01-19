<template>
  <div class="center">
    <div class="assciation_left">
      <member-association-item v-for="n in 10" :key="n"/>
    </div>
    <div class="assciation_right"></div>
  </div>
</template>

<script>
import MemberAssociationItem from "~/components/members/MemberAssociationItem.vue";
export default {
  name: "MemberAssociation",
  components: {
    MemberAssociationItem
  }
};
</script>

<style>
.center {
  flex-direction: column;
  align-items: stretch;
}

.assciation_right {
  width: 25%;
}
.assciation_left {
  width: 75%;
}
</style>
