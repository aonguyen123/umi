import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default function BasicLayout({ children, styles }) {
    return (
        <Layout>
            <Header>Header</Header>
            <Content>
                <div className={styles.basicContainer}>{children}</div>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}
