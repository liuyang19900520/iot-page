<template>
  <div>
    <md-tabs class="md-primary" md-alignment="left">
      <md-tab id="tab-association-form" md-label="Association">
        <member-join-us-form-association/>
      </md-tab>
      <md-tab id="tab-company-form" md-label="Company">
        <member-join-us-form-company/>
      </md-tab>
      <md-tab id="tab-personal-form" md-label="Personal">
        <member-join-us-form-personal/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import MemberJoinUsFormAssociation from "~/components/members/MemberJoinUsFormAssociation.vue";
import MemberJoinUsFormCompany from "~/components/members/MemberJoinUsFormCompany.vue";
import MemberJoinUsFormPersonal from "~/components/members/MemberJoinUsFormPersonal.vue";
export default {
  name: "TabAlignments",
  components: {
    MemberJoinUsFormAssociation,
    MemberJoinUsFormCompany,
    MemberJoinUsFormPersonal
  }
};
</script>

<style lang="scss" scoped>
.md-tabs {
  margin-bottom: 24px;
}
</style>