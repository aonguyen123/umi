import { routerRedux } from 'dva';
import * as userServices from '@/services/user';

export default {
    namespace: 'user',

    state: {
        login: false,
        currentUser: {},
    },

    effects: {},

    reducers: {},
};
