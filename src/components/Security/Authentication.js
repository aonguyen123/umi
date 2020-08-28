import React from 'react';
import { Redirect } from 'umi';
import { connect, routerRedux } from 'dva';
import storage from '@/utils/storage';

const { LOGIN_PAGE_BASE } = process.env;

function Authentication({ children, location, dispatch }) {
    if (storage.getAuthority() === '2') {
        if (children.props.route.path === '/login') {
            return dispatch(routerRedux.goBack());
        }
        return (
            <div>
                <h2>Authentication</h2>
                {children}
            </div>
        );
    } else {
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
}

export default connect(({ authentication }) => ({
    login: authentication.login,
}))(Authentication);
