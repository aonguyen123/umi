import { request } from '@/utils/request';

export async function login(params) {
    const response = await request('POST', '/auth/signin', params, null);
    return response.data;
}
export async function getMe() {
    const response = await request('GET', '/auth/me', null, null);
    return response.data;
}
export async function getRole(idUser) {
    const response = await request('GET', `/role/getRoleByUser/${idUser}`, null, null);
    return response.data;
}
export async function getNotify() {
    const response = await request('GET', '/notify/getNotify', null, null);
    return response.data;
}
export async function addNotifycation(data) {
    const response = await request('POST', '/notify/create', data, null);
    return response.data;
}
export async function getNotifyDetail(idNotify) {
    const response = await request('GET', `/notify/notifyDetail/${idNotify}`, null, null);
    return response.data;
}
