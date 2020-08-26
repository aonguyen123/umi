import { request } from '@/utils/request';

export async function login(params) {
    const response = await request('POST', '/users/login', params, null);
    return response.data;
}
