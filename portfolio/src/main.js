// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueTyper from 'vue-typer';

const app = createApp(App);


app.use(VueTyper);

app.mount('#app');
