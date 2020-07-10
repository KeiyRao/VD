import Vue from "vue";

import element from "./element";
import App from "./App.vue";
import "./index.less";

Vue.use(element);

new Vue({ el: "#root", template: "<App />", components: { App } });

if (module.hot) {
  module.hot.accept();
}
