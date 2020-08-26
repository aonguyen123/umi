import { routerRedux } from 'dva';
import { delay } from '@/utils/utils';
import storage from '@/utils/storage';
// import * as userServices from '@/services/user';

export default {
    namespace: 'user',

    state: {
        login: false,
        currentUser: {},
    },

    effects: {
        *logout({ put, call }) {
            yield call(delay, 3000);
            storage.setTokenJWT(null);
            storage.setAuthority(null);
            yield put({
                type: 'login/reset',
            });
            yield put(routerRedux.push('/'));
            yield put({
                type: 'updateField',
                field: 'login',
                value: false,
            });
        },

        loginUserWatcher: [
            function*({ take, select, put }) {
                while (true) {
                    yield take('login/saveLoginStatus');
                    const { status, redirectUrl } = yield select(state => state.login);
                    if (status) {
                        yield put({
                            type: 'updateField',
                            field: 'login',
                            value: true,
                        });
                        yield put(routerRedux.push(redirectUrl));
                    }
                }
            },
            {
                type: 'watcher',
            },
        ],
    },

    reducers: {
        updateField(state, action) {
            const { field, value } = action;
            return {
                ...state,
                [field]: value,
            };
        },
    },

    subscriptions: {},
};
