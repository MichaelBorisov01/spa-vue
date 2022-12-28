<template>
  <v-app>
    <navBar app :headerData="headerData" v-on:switchTab="tab => (this.headerData.currentTab = tab)" />
    <keep-alive>
      <v-component :is="currentComponent"></v-component>
    </keep-alive>
  </v-app>
</template>

<script>
import navBar from "./components/NavBar.vue";
export default {
  name: "app",
  data: () => ({
    headerData: {
      tabs: ["OrderBook", "MySymbol"],
      currentTab: "OrderBook",
    },
  }),
  computed: {
    currentComponent() {    //при изменении currentTab меняем компонент
      return this.headerData.currentTab;
    }
  },
  components: {
    navBar,
    OrderBook: () => import('./components/OrderBook.vue'),  // импорты подгрузятся, если они необходимы 
    MySymbol: () => import('./components/MySymbol.vue'),    // ленивая загрузка
  },
};
</script>

<style>

</style>