import { routerRedux } from 'dva';
import * as userServices from '@/services/user';

const initialState = {
    status: undefined,
    redirectUrl: '',
};

function delay(ms = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

export default {
    namespace: 'login',
    state: initialState,

    effects: {
        *login({ payload }, { put, call }) {
            yield put({
                type: 'saveLoginStatus',
                status: true,
            });
            // const response = yield call(userServices.login, payload);
            // console.log(response);
        },
        loginWatcher: [
            function*({take, put}) {
                while(true) {
                    yield take('login/login/@@start');
                    // yield put({type: 'login/login'})
                }
            },
            {
                type: 'takeLatest'
            }
        ]
    },

    reducers: {
        saveLoginStatus(state, action) {
            return {
                ...state,
                status: action.status,
            };
        },
    },
};
