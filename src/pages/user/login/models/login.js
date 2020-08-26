import * as userServices from '@/services/user';
import storage from '@/utils/storage';

export default {
    namespace: 'login',
    state: {
        status: undefined,
        redirectUrl: '',
    },

    effects: {
        *login({ payload }, { put, call }) {
            const response = yield call(userServices.login, payload);
            if (response) {
                const { token, role } = response;
                if (token && role) {
                    storage.setTokenJWT(token);
                    storage.setAuthority(role);
                }
            }
            const loginStatus = !!(response && response.token);
            yield put({
                type: 'saveLoginStatus',
                status: loginStatus,
            });
            return loginStatus;
        },
    },

    reducers: {
        saveRedirectPath(state, action) {
            return {
                ...state,
                redirectUrl: action.redirectUrl || '/',
            };
        },
        saveLoginStatus(state, action) {
            return {
                ...state,
                status: action.status,
            };
        },
    },

    subscriptions: {
        setup({ history, dispatch }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/user/login') {
                    dispatch({
                        type: 'saveRedirectPath',
                        redirectUrl: decodeURIComponent(query.redirectUrl),
                    });
                }
            });
        },
    },
};
