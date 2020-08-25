/**
 * title: Login page
 */
import { Row, Col } from 'antd';
import Login from './components/login';
import styles from './styles.css';

export default function() {
    return (
        <Row justify="center" align="middle" className={styles.login}>
            <Col span={10}>
                <Login />
            </Col>
        </Row>
    );
}
