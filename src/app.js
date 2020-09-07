import { message } from 'antd';
import store from 'store';

import { setHeaderRequest } from './utils/request';

const token = store.get('token_JWT');
setHeaderRequest(token);

export const dva = {
    config: {
        onError(err) {
            err.preventDefault();
            message.error(err.response.data.message, 3);
        },
    },
};
