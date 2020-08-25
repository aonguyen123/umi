import { request } from '@/utils/request';

export function login(params) {
    const response = request('GET', '/user/login', params, null);
    return response.data;
}
