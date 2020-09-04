import { message } from 'antd';
import store from 'store';

import { setHeaderRequest } from './utils/request';
import { requestFirebaseNotification } from './firebaseInit';

const token = store.get('token_JWT');
setHeaderRequest(token);

requestFirebaseNotification()
    .then(firebaseToken => {
        console.log(firebaseToken);
    })
    .catch(err => {
        return err;
    });
export const dva = {
    config: {
        onError(err) {
            err.preventDefault();
            message.error(err.response.data.message, 3);
        },
    },
};
