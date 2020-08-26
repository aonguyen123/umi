import React from 'react';
import { connect } from 'dva';
import { Redirect } from 'umi';
import storage from '@/utils/storage';

function Guest({ login, children }) {
    if (!storage.getAuthority()) {
        return children;
    }
    const redirectPath = login.redirectUrl || '/';
    return <Redirect to={redirectPath} />;
}

export default connect(({ login }) => ({
    login,
}))(Guest);
