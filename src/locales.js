import { store } from './store';

export const t = (key, param = '') => {
    const locale = {
        en: {
        },
        ar: {
        },
    };
    const lang = 'en';
    return locale[lang][key] ? locale[lang][key] : locale['en'][key];
};