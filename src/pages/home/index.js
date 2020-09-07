/**
 * title: Home page
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import { Row, Col } from 'antd';
import { connect } from 'dva';
import Notifies from './components/Notifies';
import AddNotify from './components/AddNotify';
import styles from './styles.css';

function Home({ notifies, loading, dispatch, userInfo }) {

    function sendMessage(values) {
        const payload = { ...values, idUser: userInfo._id };
        dispatch({ type: 'home/addNofify', payload });
    }

    return (
        <div className={styles.container}>
            <Row>
                <Col xxl={14} xl={14} lg={12} md={24} sm={24}>
                    <Notifies notifies={notifies} loading={loading} />
                </Col>
                <Col xxl={10} xl={10} lg={12} md={24} sm={24}>
                    <AddNotify sendMessage={sendMessage} />
                </Col>
            </Row>
        </div>
    );
}

export default connect(({ home, loading, app }) => ({
    notifies: home.notifies,
    loading,
    userInfo: app.userInfo,
}))(Home);
