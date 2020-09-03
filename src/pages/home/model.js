import { getNotify } from '@/services/user';

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
    },

    reducers: {
        saveNotifies(state, action) {
            return {
                ...state,
                notifies: action.data,
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
