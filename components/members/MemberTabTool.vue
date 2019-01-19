<template>
  <div>
    <md-tabs>
      <md-tab id="tab-association" md-label="Association">
        <MemberAssociation/>
      </md-tab>

      <md-tab id="tab-pages" md-label="Companies">
        <MemberAssociation/>
      </md-tab>

      <md-tab id="tab-experts" md-label="Experts">
        <MemberExperts/>
      </md-tab>

      <md-tab id="tab-join" md-label="Join us">
        <MemberJoinUs/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import MemberAssociation from "~/components/members/MemberAssociation.vue";
import MemberExperts from "~/components/members/MemberExperts.vue";
import MemberJoinUs from "~/components/members/MemberJoinUs.vue";
export default {
  name: "TabContent",
  components: {
    MemberAssociation,
    MemberExperts,
    MemberJoinUs
  }
};
</script>