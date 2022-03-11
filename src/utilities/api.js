import axios from 'axios';
import store from '@/store';
import axiosRetry from 'axios-retry';
import { eventBus } from "@/utilities/eventBus";

const pending = {}

export const Api = (type = "", showError = true) => {
    let baseURL = type == 'local' ? '/' : process.env.VUE_APP_BASE_API;
    const apiCreate = axios.create({
      baseURL
    });

    axiosRetry(apiCreate, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
    apiCreate.interceptors.request.use((config) => {
        if (store.getters.token) {
            config.headers.Authorization = `Bearer ${store.getters.token}`;
        }
        return config;
    });

    apiCreate.interceptors.response.use(
        response => {
            return response;
        },
        error => {    
            let message = "ops", type = 'error';
            let showMessage = true;
            if (error.response) {
                if (error.response.status == 400) {
                    if (error.response.data.message) {
                        message = error.response.data.message;
                        if (error.response.data.data && error.response.data.data.length && error.response.data.data[0].message) {
                            message = error.response.data.data[0].message;
                        }
                    }
                }
                if (error.response.status == 403) {
                    showMessage = false;
                }
                if (error.response.status == 404) {
                    
                }
                if (error.response.status == 401) {
                    message = 'unauthorized-access';
                    
                }
                if (error.response.status >= 500) {
                    if (error.response.data && error.response.data.message && error.response.data.message.includes('duplicate')) {
                        showMessage = false;
                    } else {
                        message = 'server-err';
                    }
                }
            }
            showMessage && showError && eventBus.$emit('snackbar', {
                type,
                msg: message
            });
            return {
                data: {},
                code: error?.response?.status
            };
        }
    );

    apiCreate.clear = () => {
        Object.keys(pending).map(e => {
            if (pending[e]) {
                pending[e]();
                delete pending[e];
            }
        });
    };

    return apiCreate;
}