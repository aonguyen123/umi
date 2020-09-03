import React from 'react';
import { connect } from 'dva';

import Loader from '@/components/Loader/Loader';

function LoginLayout({ children, loading }) {
    console.log(loading)
    return <div className="container">{children}</div>;
}
export default connect(({ loading }) => ({
    loading,
}))(LoginLayout);
