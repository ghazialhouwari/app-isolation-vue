import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from '@/i18n';
import { templateSelector } from '@/utilities/functions';

import vueCustomElement from 'vue-custom-element';
import CustomStyles from '@/components/customStyles';

import '@/utilities/directives';
import '@/utilities/filters';

window.templateSelector = templateSelector;

Vue.use(vueCustomElement);
App.store = store;
App.i18n = i18n;

Vue.component('custom-styles', CustomStyles);
Vue.customElement('template--wrapper', App, {shadow: true})