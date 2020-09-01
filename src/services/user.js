import { request } from '@/utils/request';
import API from './apis';

const { getUserInfo, signin } = API;

export async function login(params) {
    const response = await request('POST', signin, params, null);
    return response.data;
}
export async function getMe() {
    const response = await request('GET', getUserInfo, null, null);
    return response.data;
}
