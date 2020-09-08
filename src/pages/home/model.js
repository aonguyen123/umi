import { getNotify, addNotifycation, getNotifyDetail } from '@/services/user';
import pathToRegexp from 'path-to-regexp';

export default {
    namespace: 'home',
    state: {
        notifies: [],
        notifyDetail: {},
    },

    effects: {
        *getNotify(action, { call, put }) {
            const result = yield call(getNotify);
            yield put({ type: 'saveNotifies', data: result });
        },
        *addNotify({ payload }, { call, put }) {
            const result = yield call(addNotifycation, payload);
            yield put({ type: 'addNoti', data: result });
        },
        *getNotifyDetail({ payload }, { call, put }) {
            const data = yield call(getNotifyDetail, payload);
            yield put({ type: 'saveNotifyDetail', data });
        },
    },

    reducers: {
        saveNotifies(state, action) {
            return {
                ...state,
                notifies: action.data,
            };
        },
        addNoti(state, action) {
            return {
                ...state,
                notifies: [action.data, ...state.notifies],
            };
        },
        saveNotifyDetail(state, action) {
            return {
                ...state,
                notifyDetail: action.data,
            };
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/home') {
                    dispatch({ type: 'getNotify' });
                }
                const match = pathToRegexp('/home/:id').exec(pathname);
                if (match) {
                    dispatch({ type: 'getNotifyDetail', payload: match[1] });
                }
            });
        },
    },
};
