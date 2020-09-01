export default {
    define: {
        'process.env': {
            ...process.env,
            LOGIN_PAGE_BASE: '/login',
            URL_API: 'https://app-nest-api.herokuapp.com',
        },
    },
};
