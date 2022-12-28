<template>
  <div class="content">
    <div class="symbol-type">Current symbol = {{ currentSymbol }}</div>
    <div class="wrapper">

      <v-select class="select" v-model="currentSymbol" :items="options" label="Change symbol" solo
        style="margin: 15px auto;" />

    </div>
  </div>
</template>

<script>
export default {
  name: "MySymbol",
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT"
  }),
  watch: {
    currentSymbol(symbol) {
      this.$bus.$emit('symbol', symbol);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0 0 0 0;
}

.symbol-type {
  text-align: center;
  width: 100%;
  background-color: grey;
  color: white;
}

.select {
  max-width: 250px;
}
</style>