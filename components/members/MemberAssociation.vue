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
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .assciation_right {
    display: none;
  }
  .assciation_left {
    width: 100%;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .assciation_right {
    display: none;
  }
  .assciation_left {
    width: 100%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .assciation_right {
    width: 25%;
    justify-content: flex-start;
    padding: 2%;
  }
  .assciation_left {
    width: 75%;
  }
}
</style>
