import { routerRedux } from 'dva';
import { delay } from '@/utils/utils';
import storage from '@/utils/storage';

export default {
    namespace: 'authentication',

    state: {
        login: false,
        currentUser: {},
    },

    effects: {
        *getCurrentUser(action, { put }) {
            const userCurrent = storage.getUserCurrent();
            yield put({
                type: 'saveUserCurrent',
                data: userCurrent,
            });
        },
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

        authUserWatcher: [
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
        setup({ history, dispatch }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({ type: 'getCurrentUser' });
                }
            });
        },
    },
};
