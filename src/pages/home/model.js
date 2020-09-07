import { getNotify, addNotifycation } from '@/services/user';

export default {
    namespace: 'home',
    state: {
        notifies: [],
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
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/home') {
                    dispatch({ type: 'getNotify' });
                }
            });
        },
    },
};
