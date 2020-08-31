import * as userServices from '@/services/user';
import storage from '@/utils/storage';

export default {
    namespace: 'login',
    state: {
        token: undefined,
        redirectUrl: '',
    },

    effects: {
        *login({ payload }, { put, call }) {
            const response = yield call(userServices.login, payload);
            if (response) {
                const { accessToken } = response;
                if (accessToken) {
                    storage.setTokenJWT(accessToken);
                }
            }
            yield put({
                type: 'saveLoginStatus',
                token: response.accessToken,
            });
            //neu return thi ben view page se nhan gia tri return
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
                token: action.token,
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
