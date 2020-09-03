import store from 'store';
import { routerRedux } from 'dva';
import * as userServices from '@/services/user';
import { setHeaderRequest } from '@/utils/request';

export default {
    namespace: 'login',
    state: {},

    effects: {
        *login({ payload }, { put, call, select }) {
            const response = yield call(userServices.login, payload);
            const { locationQuery } = yield select(_ => _.app);

            if (response) {
                const { accessToken } = response;
                if (accessToken) {
                    store.set('token_JWT', accessToken);
                    yield call(setHeaderRequest, accessToken);
                }
                const { redirectUrl } = locationQuery;
                yield put.resolve({ type: 'app/query' });
                if (redirectUrl) {
                    return yield put(routerRedux.push(redirectUrl));
                }
                return yield put(routerRedux.push('/'));
            }
            //neu return thi ben view page se nhan gia tri return
        },
    },

    reducers: {},
};
