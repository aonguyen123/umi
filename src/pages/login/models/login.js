import store from 'store';
import * as userServices from '@/services/user';
import { setHeaderRequest } from '@/utils/request';

export default {
    namespace: 'login',
    state: {
        token: undefined,
        redirectUrl: '',
    },

    effects: {
        *login({ payload }, { put, call, select }) {
            const response = yield call(userServices.login, payload);
            const { locationQuery } = yield select(_ => _.app);
            console.log(locationQuery);

            if (response) {
                const { accessToken } = response;
                if (accessToken) {
                    store.set('token_JWT', accessToken);
                    yield call(setHeaderRequest, accessToken);
                }
                // const { from } = locationQuery;
                // console.log(from);
                // yield put({ type: 'app/query' });
                // if (!pathToRegexp('/login').exec(from)) {
                //     if (['', '/'].includes(from)) history.push('/dashboard');
                //     else history.push(from);
                // } else {
                //     history.push('/dashboard');
                // }
            } else {
                // throw data;
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
