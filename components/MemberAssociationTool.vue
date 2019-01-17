<template>
  <div class="center">
    <div class="assciation_left">
      <md-table>
        <md-table-row class="row_margin" v-for="n in 10" :key="n">
          <md-table-cell md-numeric>{{n}}</md-table-cell>
          <md-table-cell>
            <img src="../assets/post-1.jpg" alt="People">
          </md-table-cell>
          <md-table-cell>
            <h4>sdubbin0@geocities.com</h4>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores,
              sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores,
              sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </p>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <div class="assciation_right"></div>
  </div>
</template>

<script>
export default {
  name: "TableBasic"
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

md-table-row {
  
}
</style>
