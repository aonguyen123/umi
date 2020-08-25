import { routerRedux } from 'dva';
import * as userServices from '@/services/user';

const initialState = {
    status: undefined,
    redirectUrl: '',
};

export default {
    namespace: 'login',
    state: initialState,

    effects: {
        *login({ payload }, { put, call }) {
            const response = yield call(userServices.login(payload));
            console.log(response);
        },
    },
};
