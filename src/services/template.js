import { Api } from '@/utilities/api';
import { store } from '@/store';

export default {
    async template(body) {
        return await Api().post(`template`, body);
    },
}