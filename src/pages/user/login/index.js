/**
 * title: Login page
 *
 */
import { Row, Col } from 'antd';
import { connect } from 'dva';
import LoginComponent from './components/login';
import styles from './styles.css';

function Login({ status, dispatch, effectLoading }) {
    async function onLogin(values) {
        await dispatch({
            type: 'login/login',
            payload: values,
        });
    }

    return (
        <Row justify="center" align="middle" className={styles.login}>
            <Col span={10}>
                <LoginComponent onLogin={onLogin} isLoading={effectLoading} />
            </Col>
        </Row>
    );
}

export default connect(({ login, loading }) => ({
    status: login.status,
    // globalLoading: loading.global,
    // loginLoading: loading.models['login'],
    effectLoading: loading.effects['login/login'],
}))(Login);
