import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios"
import myCore from './plugins/myCore';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(myCore);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
