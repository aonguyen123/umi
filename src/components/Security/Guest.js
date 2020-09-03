import React from 'react';
import { connect } from 'dva';
import { Redirect } from 'umi';

function Guest({ children, statusLogin, locationPathname, loading }) {
    if (!statusLogin) {
        return children;
    }
    console.log(locationPathname);
    const redirectPath = '/';
    return <Redirect to={redirectPath} />;
}

export default connect(({ app, loading }) => ({
    statusLogin: app.statusLogin,
    locationPathname: app.locationPathname,
    loading,
}))(Guest);
