import { routerRedux } from 'dva';
// import * as userServices from '@/services/user';

export default {
    namespace: 'user',

    state: {
        login: false,
        currentUser: {},
    },

    effects: {
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
};
