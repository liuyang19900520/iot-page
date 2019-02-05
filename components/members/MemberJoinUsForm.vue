<template>
  <div>
    <!-- <div class="tab-form">
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
    </div>-->
    <div class="select-form">
      <md-field class="select-form-title">
        <label for="memberType">请选择身份</label>
        <md-select v-model="memberType" name="memberType" id="memberType" :md-selected="showForm()">
          <md-option value="association">association</md-option>
          <md-option value="company">company</md-option>
          <md-option value="personal">personal</md-option>
        </md-select>
      </md-field>

      <member-join-us-form-association v-bind:class="{ 'select-form-tab': isAssociation }"/>

      <member-join-us-form-company v-bind:class="{ 'select-form-tab': isCompany }"/>

      <member-join-us-form-personal v-bind:class="{ 'select-form-tab': isPersonal }"/>
    </div>
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
  },
  data: () => ({
    memberType: "association",
    isAssociation: "",
    isCompany: "",
    isPersonal: ""
  }),
  methods: {
    showForm() {
      console.log(this.memberType);
      switch (this.memberType) {
        case "association":
          this.isAssociation = false;
          this.isCompany = true;
          this.isPersonal = true;
          break;
        case "company":
          this.isAssociation = true;
          this.isCompany = false;
          this.isPersonal = true;
          break;
        case "personal":
          this.isAssociation = true;
          this.isCompany = true;
          this.isPersonal = false;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.select-form-title {
  width: 25%;
}

.select-form-tab {
  display: none;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .select-form-title {
    width: 100%;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .select-form-title {
    width: 100%;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
}
</style>