
import { createApp } from 'vue'
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
import './assets/css/app.css';
import 'vuetify/styles';
import './assets/styles/main.scss';

const app = createApp(App)
const vuetify = createVuetify(
  {
    components,
    directives,
  }
)
app.use(router)
app.use(vuetify);
app.mount('#app')
