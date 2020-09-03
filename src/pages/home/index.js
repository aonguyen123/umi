/**
 * title: Home page
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import { Row, Col } from 'antd';
import Notifies from './components/Notifies';
import AddNotify from './components/AddNotify'
import styles from './styles.css';

function Home() {
    return (
        <div className={styles.container}>
            <Row>
                <Col xxl={14} xl={14} lg={12} md={24} sm={24}>
                    <Notifies />
                </Col>
                <Col xxl={10} xl={10} lg={12} md={24} sm={24}>
                    <AddNotify />
                </Col>
            </Row>
        </div>
    );
}

export default Home;
