import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';
import Loader from '@/components/Loader/Loader';

const { LOGIN_PAGE_BASE } = process.env;

function Authentication({ children, location, dispatch, statusLogin, loading }) {
    if (loading.effects['app/query']) {
        return <Loader fullScreen spinning={loading.effects['app/query']} />;
    }
    if (statusLogin) {
        return <div>{children}</div>;
    }
    if (children.props.route.path === '/login') {
        return children;
    }
    let loginPath = LOGIN_PAGE_BASE || '/auth/login';
    const redirectParams = [];
    if (location.pathname) {
        redirectParams.push(location.pathname);
    }
    if (location.search) {
        redirectParams.push(location.search);
    }
    loginPath = `${loginPath}?redirectUrl=${encodeURIComponent(redirectParams.join(''))}`;

    return <Redirect to={loginPath} />;
}

export default connect(({ app, loading }) => ({
    statusLogin: app.statusLogin,
    loading,
}))(Authentication);
