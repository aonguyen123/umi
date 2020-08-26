import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';

const { LOGIN_PAGE_BASE } = process.env;

function PrivateRouter({ children, login, location }) {
    if (login) {
        return (
            <div>
                <h2>PrivateRouter</h2>
                {children}
            </div>
        );
    }
    let loginPath = LOGIN_PAGE_BASE || '/user/login';
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

export default connect(({ user }) => ({
    login: user.login,
}))(PrivateRouter);
