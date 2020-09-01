import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';

import GlobalHeader from './../GlobalHeader';
import GlobalFooter from './../GlobalFooter';
import Loader from '@/components/Loader/Loader';
import styles from './styles.css';

const { Content } = Layout;

function BasicLayout({ children, loading }) {
    console.log(loading.effects['app/query']);
    return (
        <Layout>
            <GlobalHeader />
            <Loader fullScreen spinning={loading.effects['app/query']} />
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
