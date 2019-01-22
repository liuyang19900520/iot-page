<template>
  <div>
    <md-list>
      <h3>最新活动</h3>
      <br>
      <md-list-item v-for="n in 10" :key="n">
        <h5>● 刘会长出席北京xx活动</h5>
        <h6>2019-01-01</h6>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: "SingleLine"
};
</script>

<style lang="scss" scoped>
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
</style>