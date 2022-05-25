import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

import ActionButton from "@/components/ActionButton.vue";

import './index.css';
import clickAway from './directives/click-away';

const app = createApp(App)

// libraries
app.use(router);

// components
app.component('ActionButton', ActionButton)

// directives
app.directive('click-away', clickAway)

app.mount('#app')
