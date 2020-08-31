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
                const { accessToken } = response;
                if (accessToken) {
                    storage.setTokenJWT(accessToken);
                    // storage.setAuthority(role);
                    // storage.setUserCurrent(rest);
                }
            }
            const loginStatus = !!(response && response.accessToken);
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
                redirectUrl: action.redirectUrl,
            };
        },
        saveLoginStatus(state, action) {
            return {
                ...state,
                status: action.status,
            };
        },
        reset(state) {
            return {
                ...state,
            };
        },
    },

    subscriptions: {
        setup({ history, dispatch }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/login') {
                    dispatch({
                        type: 'saveRedirectPath',
                        redirectUrl: decodeURIComponent(
                            query.redirectUrl ? query.redirectUrl : '/',
                        ),
                    });
                }
            });
        },
    },
};
