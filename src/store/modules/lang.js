import config from '@/config/config';
import Vue from 'vue';
// import i18n from '@/i18n';

const SET_LANG = 'SET_LANG';

const state = {
    lang: 'en',
};

const getters = {
    lang: state => state.lang,
};

const mutations = {
    SET_LANG(state, langPayload) {
        if (config.lang.languages.includes(langPayload)) {
            state.lang = langPayload;
        }
        const isRTL = langPayload == 'ar' ? true : false;
        if (Vue.prototype.$vuetify) {
            i18n.locale = langPayload;
            Vue.prototype.$vuetify.rtl = isRTL;
            Vue.prototype.$vuetify.lang.current = langPayload;
            Vue.prototype.locale = langPayload;
        } else {
            setTimeout(() => {
                i18n.locale = langPayload;
                Vue.prototype.$vuetify.rtl = isRTL;
                Vue.prototype.$vuetify.lang.current = langPayload;
                Vue.prototype.locale = langPayload;
            }, 0);
        }
    }
};

const actions = {
    setLang({ commit }, options) {
        commit(SET_LANG, options);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}