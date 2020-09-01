import axios from 'axios';

export function request(method, endPoint, data, params) {
    const { URL_API } = process.env;
    return axios({
        method,
        url: `${URL_API}${endPoint}`,
        data,
        params,
    });
}
export function setHeaderRequest(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
