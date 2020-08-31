import React from 'react';
import { Input, Form, Card, Button, Col, Row, Image } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import styles from './styles.css';

export default function LoginComponent({ onLogin, isLoading }) {
    return (
        <Card>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div className={styles.titleLogin}>
                        <Image
                            width="65px"
                            src="https://avatars1.githubusercontent.com/u/20552239?s=200&v=4"
                        />
                        <span>DVA</span>
                    </div>
                </Col>
                <Col span={24}>
                    <Form name="login-form" onFinish={onLogin}>
                        <Form.Item
                            name="username"
                            hasFeedback
                            rules={[{ required: true, message: 'Please input your username' }]}
                        >
                            <Input placeholder="Username" prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            hasFeedback
                            rules={[{ required: true, message: 'Please input your password' }]}
                        >
                            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                loading={isLoading}
                                icon={<LoginOutlined />}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Card>
    );
}
