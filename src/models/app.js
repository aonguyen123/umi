import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva';
import store from 'store';

import { getMe } from '@/services/user';

export default {
    namespace: 'app',
    state: {
        locationPathname: '',
        locationQuery: {},
        statusLogin: false,
        userInfo: {},
    },
    effects: {
        *query({ payload }, { call, put, select }) {
            try {
                const dataUserInfo = yield call(getMe);
                yield put({ type: 'updateField', field: 'statusLogin', value: true });
                yield put({ type: 'updateField', field: 'userInfo', value: dataUserInfo });
                if (pathToRegexp(['/', '/login']).exec(window.location.pathname)) {
                    yield put(routerRedux.push('/'));
                }
                return dataUserInfo;
            } catch (error) {
                yield put({ type: 'updateField', field: 'statusLogin', value: false });
            }
        },
        *logout(action, { put }) {
            store.remove('token_JWT');
            yield put({ type: 'reset', statusLogin: false, userInfo: {} });
        },
    },
    reducers: {
        updateState(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        updateField(state, action) {
            return {
                ...state,
                [action.field]: action.value,
            };
        },
        reset(state, action) {
            return {
                ...state,
                ...action,
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
