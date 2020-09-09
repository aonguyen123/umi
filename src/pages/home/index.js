/**
 * title: Home page
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import { Row, Col, Spin } from 'antd';
import { connect } from 'dva';
import dynamic from 'umi/dynamic';
import Notifies from './components/Notifies';
import AddNotify from './components/AddNotify';
import styles from './styles.css';

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const Home = dynamic({
    loader: async function() {
        await delay(1000);
        return ({ notifies, loading, dispatch, userInfo, location }) => {
            function sendMessage(values) {
                const payload = { ...values, idUser: userInfo._id };
                dispatch({ type: 'home/addNotify', payload });
            }

            return (
                <div className={styles.container}>
                    <Row gutter={[20, 20]}>
                        <Col xxl={14} xl={14} lg={12} md={24} sm={24}>
                            <Notifies notifies={notifies} loading={loading} location={location} />
                        </Col>
                        <Col xxl={10} xl={10} lg={12} md={24} sm={24}>
                            <AddNotify sendMessage={sendMessage} loading={loading} />
                        </Col>
                    </Row>
                </div>
            );
        };
    },
    loading: () => <Spin />
});

export default connect(({ home, loading, app }) => ({
    notifies: home.notifies,
    loading,
    userInfo: app.userInfo,
}))(Home);
