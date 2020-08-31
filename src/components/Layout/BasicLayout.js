import React from 'react';
import { Layout } from 'antd';
import GlobalHeader from './../GlobalHeader';
import GlobalFooter from './../GlobalFooter';

const { Content } = Layout;

export default function BasicLayout({ children, styles }) {
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
