import React from 'react';
import { Redirect } from 'umi';
import { routerRedux, connect } from 'dva';

const { LOGIN_PAGE_BASE } = process.env;

function Authentication({ children, location, dispatch, currentUser, loadingGlobal }) {
    console.log(currentUser)
    console.log(loadingGlobal)
    if(loadingGlobal) {
        return 'loading...'
    }

    if (currentUser) {
        return (
            <div>
                <h2>Authentication</h2>
                {children}
            </div>
        );
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

export default connect(({ authentication, loading }) => ({
    currentUser: authentication.currentUser,
    loadingGlobal: loading.global
}))(Authentication);
