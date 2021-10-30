import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
