import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { VueMaskDirective } from "v-mask";
import components from "./components/UI";
import "./index.css";

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
  beforeMount: vMaskV2.bind,
  updated: vMaskV2.componentUpdated,
  unmounted: vMaskV2.unbind,
};

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).directive("mask", vMaskV3).mount("#app");
