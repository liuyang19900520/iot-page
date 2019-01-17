<template>
  <div>
    <md-tabs>
      <md-tab id="tab-association" md-label="Association">
        <MemberAssociationTool/>
      </md-tab>

      <md-tab id="tab-pages" md-label="Companies">
        <MemberAssociationTool/>
      </md-tab>

      <md-tab id="tab-experts" md-label="Experts">
        <MemberExperts/>
      </md-tab>

      <md-tab id="tab-favorites" md-label="Join us">
        <MemberAssociationTool/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import MemberAssociationTool from "~/components/MemberAssociationTool.vue";
import MemberExperts from "~/components/MemberExperts.vue";
export default {
  name: "TabContent",
  components: {
    MemberAssociationTool,
    MemberExperts
  }
};
</script>