const API = {
    getRole: '/role/getRoleByUser/:id',
    updateRoleByUser: '/role/updateRoleByUser',
    signup: '/auth/signup',
    signin: '/auth/signin',
    getUserInfo: '/auth/me',
    createNotify: '/notify/create',
    getNotifyByUser: '/notify/getNotifyByUser/:id',
};

let Ifunction = {};
for (const key in API) {
    Ifunction[key] = API[key];
}
export default Ifunction;
