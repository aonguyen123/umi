import React from 'react';
import { connect } from 'dva';
import Loader from '@/components/Loader/Loader';

function LoginLayout({ children, loading }) {
    if (loading.effects['app/query'] && !loading.models['login']) {
        return <Loader spinning={loading.effects['app/query']} fullScreen />;
    }
    return <div className="container">{children}</div>;
}
export default connect(({ loading }) => ({
    loading,
}))(LoginLayout);
