export default {
    define: {
        'process.env': {
            ...process.env,
            LOGIN_PAGE_BASE: '/login',
            URL_API: 'http://localhost:7000',
        },
    },
};
