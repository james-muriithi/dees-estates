import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

import ActionButton from "@/components/ActionButton.vue";

import './index.css';

const app = createApp(App)

app.use(router);

app.component('ActionButton', ActionButton)

app.mount('#app')
