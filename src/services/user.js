import { request } from '@/utils/request';

export async function login(params) {
    const response = await request('POST', '/auth/signin', params, null);
    return response.data;
}
