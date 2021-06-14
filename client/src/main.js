import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import VuePageTransition from "vue-page-transition";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: SocketIO("http://localhost:5000"),
  }),
  require("moment-timezone"),
  VuePageTransition
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
