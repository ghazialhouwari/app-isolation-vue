// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import i18n from '@/i18n';
import { templateSelector } from '@/utilities/functions';

import '@/utilities/directives';
import '@/utilities/filters';

window.templateSelector = templateSelector;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  i18n,
  components: { App},
  template: '<App/>'
});
