<template>
  <div>
    <md-field>
      <label>姓名</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label>电话</label>
      <md-input v-model="regular"></md-input>
    </md-field>
    <md-field>
      <label>邮箱</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label>工作单位</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label>兴趣领域</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-button class="md-primary md-raised">Commit</md-button>
  </div>
</template>

<script>
export default {
  name: "Counters",
  data: () => ({
    regular: null,
    maxLength: null,
    disabled: null,
    autogrow: null,
    textarea: null
  })
};
</script>

<style>
.midden-button {
  width: 20%;
  margin: 0 auto;
}
</style>
