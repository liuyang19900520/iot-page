<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/japandeeplearning.png" alt="People">
    </div>
    <div class="assciation_profile">
      <h3 class="in_small_px">一般社団法人日本ディープラーニング協会</h3>
      <br>
      <h4 class="in_small_px">https://www.jdla.org/</h4>
      <br>
      <p>
        本協会は、ディープラーニングを中心とする技術による日本の産業競争力の向上を目指します。
        そのため、ディープラーニングを事業の核とする企業および有識者が中心となって、
        産業活用促進、人材育成、公的機関や産業への提言、国際連携、社会との対話 など、
        産業の健全な発展のために必要な活動を行っていきます。
        <a
          href="https://www.jdla.org/"
        >查看更多</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableBasic"
};
</script>

<style scoped>
.assciation_item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.assciation_img {
  width: 40%;
  margin: 2%;
}

.assciation_profile {
  width: 100%;
  margin: 2%;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .assciation_item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .assciation_profile {
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .assciation_img {
    width: 80%;
    margin: 2%;
    text-align: center;
  }
  .in_small_px {
    margin: 1%;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .assciation_item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .assciation_profile {
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .assciation_img {
    width: 80%;
    margin: 2%;
    text-align: center;
  }
  .in_small_px {
    margin: 1%;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .assciation_img {
    width: 80%;
    margin: 2%;
    text-align: center;
  }
  .assciation_item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .assciation_profile {
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .in_small_px {
    margin: 1%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
}
</style>
