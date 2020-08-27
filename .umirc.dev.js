export default {
    define: {
        'process.env': {
            ...process.env,
            LOGIN_PAGE_BASE: '/login',
            URL_API: 'http://192.168.0.157:3007',
        },
    },
};
