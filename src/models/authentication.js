import { routerRedux } from 'dva';
import axios from 'axios';

import { delay } from '@/utils/utils';
import storage from '@/utils/storage';
import { getMe } from '@/services/user';

export default {
    namespace: 'authentication',

    state: {
        login: false,
        currentUser: undefined,
        roles: undefined,
    },

    effects: {
        *logout(action, { put, call }) {
            yield call(delay, 3000);
            storage.setTokenJWT(null);
            storage.setAuthority(null);
            storage.setUserCurrent(null);
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
        *getMe(action, { put, call }) {
            const data = yield call(getMe);
            yield put({ type: 'saveUserCurrent', data });
        },

        authUserWatcher: [
            function*({ take, select, put, call }) {
                while (true) {
                    yield take('login/saveLoginStatus');
                    const { token, redirectUrl } = yield select(state => state.login);
                    if (token) {
                        console.log(redirectUrl);
                        // const data = yield call(getMe);
                        // yield put({ type: 'saveUserCurrent', data });
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
            return {
                ...state,
                [action.field]: action.value,
            };
        },
        saveUserCurrent(state, action) {
            return {
                ...state,
                currentUser: action.data,
            };
        },
    },
    subscriptions: {
        setupGetMe({ dispatch }) {
            const token = storage.getTokenJWT();
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                return dispatch({ type: 'getMe' });
            }
        },
    },
};
