import store from './store/index.js';
import router from './router/router.js';
import App from './App.js';


const app = Vue.createApp(App);

app.use(store);
app.use(router);

app.mount('#app');