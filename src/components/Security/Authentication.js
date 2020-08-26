import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';

const { LOGIN_PAGE_BASE } = process.env;

function Authentication({ children, login, location }) {
    console.log(login);
    if (login) {
        return (
            <div>
                <h2>Authentication</h2>
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
}))(Authentication);
