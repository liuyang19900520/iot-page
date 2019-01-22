<template>
  <div>
    <md-field>
      <label>公司名称</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label for="movie">主营业务</label>
      <md-select v-model="movie" name="movie" id="movie">
        <md-option value="fight-club">AI</md-option>
        <md-option value="godfather">IT</md-option>
        <md-option value="godfather-ii">IOT</md-option>
        <md-option value="godfather-iii">IT service</md-option>
      </md-select>
    </md-field>

    <md-field>
      <label>公司地址</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label>官方网址</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label>联系人</label>
      <md-input v-model="regular"></md-input>
    </md-field>

    <md-field>
      <label>联系人电话</label>
      <md-input v-model="regular"></md-input>
    </md-field>
    <md-field>
      <label>联系人邮箱</label>
      <md-input v-model="regular"></md-input>
    </md-field>
    <md-field :class="messageClass">
      <label>公司名称</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>

    <md-button class="md-raised md-primary middle-button">Commit</md-button>
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
