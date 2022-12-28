<template>
  <v-app-bar class="app__bar">
    <v-toolbar-title class="toolbar__title">Binance</v-toolbar-title>
    <v-btn v-for="tab in headerData.tabs" :key="tab" class="nav-links__button" @click="switchTab(tab)">
      {{ tab }}
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  props: ['headerData'],
  name: 'NavBar',
  data: () => ({}),
  methods: {
    switchTab(tab) {
      this.$emit('switchTab', tab)
    }
  }
};
</script>

<style scoped>
.app__bar {
  max-height: 65px;
}

.toolbar__title {
  padding-left: 30px;
}

.nav-links__button {
  margin-left: 30px;
}
</style>