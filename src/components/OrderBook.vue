<template>
  <div class="content">
    <div class="symbol-type">Current symbol = {{ symbol }}</div>
    <div class="wrapper">
      <simpleTable :items="glass.bids">Bids</simpleTable>
      <simpleTable :items="glass.asks">Ask</simpleTable>
    </div>
  </div>
</template>

<script>
import simpleTable from "./SimpleTable.vue";
export default {
  name: "OrderBook",
  components: { simpleTable },
  data: () => ({
    glass: {
      bids: null,
      ask: null
    },
    symbol: "BTCUSDT",
    ws: null
  }),
  async created() {
    await this.snapshot();
    this.subscribeWebSocket();
    this.$bus.$on("symbol", symbol => {
      this.symbol = symbol;
      this.ws.close();
      this.subscribeWebSocket();
    });
  },
  methods: {
    async snapshot() {
      let glass = await this.$sdk.get(this.symbol);
      glass.bids = glass.bids.reverse();
      glass.asks = glass.asks.reverse();
      this.glass = glass;
    },
    subscribeWebSocket() {
      this.ws = this.$sdk.subscribe(this.symbol);
      this.ws.onmessage = async event => {            // callBack при получении данных
        let data = JSON.parse(event.data);
        let [askAdd, bidsAdd] = [
          data.a.filter(item => item[1] != 0),        // фильт нулевых сделок
          data.b.filter(item => item[1] != 0)
        ];
        askAdd.reverse();
        bidsAdd.reverse();
        this.glass.ask.splice(this.glass.ask.length - askAdd.length, askAdd.length);    // удаляем столько данных, сколько пришло
        this.glass.bids.splice(this.glass.bids.length - bidsAdd.length, bidsAdd.length);
        this.glass.ask = [...askAdd, ...this.glass.ask,];
        this.glass.bids = [...bidsAdd, ...this.glass.bids,];
      };
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 10px 0 0 0;
}

.symbol-type {
  text-align: center;
  width: 100%;
  background-color: grey;
  color: white;
}
</style>