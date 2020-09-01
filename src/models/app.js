import store from 'store';
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva';

import { getMe } from '@/services/user';

export default {
    namespace: 'app',
    state: {
        locationPathname: '',
        locationQuery: {},
    },
    effects: {
        *query({ payload }, { call, put, select }) {
            // const isInits = store.get('isInits');
            // if (isInits) {
            //     if (pathToRegexp(['/', '/login']).exec(window.location.pathname)) {
            //         yield put(routerRedux.push('/'));
            //     }
            //     return;
            // }
            // const { locationPathname } = yield select(_ => _.app);
            const dataUserInfo = yield call(getMe);
            console.log(dataUserInfo);
            return dataUserInfo;
        },
    },
    reducers: {
        updateState(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'query' });
        },
        setupHistory({ dispatch, history }) {
            history.listen(location => {
                dispatch({
                    type: 'updateState',
                    payload: {
                        locationPathname: location.pathname,
                        locationQuery: location.query,
                    },
                });
            });
        },
    },
};
