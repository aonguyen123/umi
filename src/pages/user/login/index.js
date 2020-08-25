/**
 * title: Login page
 *
 */
import { Row, Col } from 'antd';
import { connect } from 'dva';
import LoginComponent from './components/login';
import styles from './styles.css';

function Login({ status, dispatch }) {
    async function onLogin(values) {
        const rs = await dispatch({
            type: 'login/login',
            payload: values,
        });
        console.log(rs);
    }

    return (
        <Row justify="center" align="middle" className={styles.login}>
            <Col span={10}>
                <LoginComponent onLogin={onLogin} />
            </Col>
        </Row>
    );
}

export default connect(({ login }) => ({
    status: login.status,
}))(Login);
