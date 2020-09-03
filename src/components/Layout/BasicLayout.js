import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';

import GlobalHeader from './../GlobalHeader';
import GlobalFooter from './../GlobalFooter';
import Loader from '@/components/Loader/Loader';
import styles from './styles.css';

const { Content } = Layout;

function BasicLayout({ children, loading }) {
    if (loading.global) {
        return <Loader fullScreen spinning={loading.global} />;
    }
    return (
        <Layout>
            <GlobalHeader />
            <Content>
                <div className={styles.basicContainer}>{children}</div>
            </Content>
            <GlobalFooter />
        </Layout>
    );
}

export default connect(({ loading }) => ({
    loading,
}))(BasicLayout);
