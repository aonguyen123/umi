import { request } from '@/utils/request';

export function login(params) {
    const response = request('POST', '/users/login', params, null);
    return response.data;
}
