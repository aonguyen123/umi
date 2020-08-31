import axios from 'axios';
import storage from './storage';

export function request(method, endPoint, data, params) {
    const { URL_API } = process.env;
    return axios({
        method,
        url: `${URL_API}${endPoint}`,
        data,
        params,
    });
}
