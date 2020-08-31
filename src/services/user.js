import { request } from '@/utils/request';

export async function login(params) {
    const response = await request('POST', '/auth/signin', params, null);
    return response.data;
}
export async function getMe() {
    const response = await request('GET', '/auth/me', null, null);
    return response.data;
}
