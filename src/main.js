import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import './plugins/axios.js';
import './vue.config.js';
import './index.css';

createApp(App).use(createVuestic()).mount("#app");