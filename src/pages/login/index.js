/**
 * title: Login page
 * Routes:
 *  - ./src/components/Security/Authentication.js
 */
import { Row, Col } from 'antd';
import { connect } from 'dva';
import LoginComponent from '@/pages/login/components/login';
import styles from './styles.css';

function Login({ dispatch, effectLoading }) {
    async function onLogin(values) {
        await dispatch({
            type: 'login/login',
            payload: values,
        });
    }

    return (
        <Row justify="center" align="middle" className={styles.login}>
            <Col xxl={7} xl={7} lg={10} md={10} sm={12}>
                <LoginComponent onLogin={onLogin} isLoading={effectLoading} />
            </Col>
        </Row>
    );
}

export default connect(({ loading }) => ({
    // globalLoading: loading.global,
    // loginLoading: loading.models['login'],
    effectLoading: loading.effects['login/login'],
}))(Login);
