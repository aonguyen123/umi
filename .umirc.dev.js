export default {
    define: {
        'process.env': {
            ...process.env,
            LOGIN_PAGE_BASE: '/user/login',
            URL_API: 'http://192.168.0.157:3006',
        },
    },
};
