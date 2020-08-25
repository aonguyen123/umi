import React from 'react';
import { Input, Form, Card, Button, Col, Row, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import yay from '@/assets/yay.jpg';
import placeholderImg from '@/assets/placeholder.jpg';

export default function LoginComponent({ onLogin }) {
    return (
        <Card>
            <Row justify="space-between" align="middle">
                <Col span={12}>
                    <Image
                        width="90%"
                        src={yay}
                        placeholder={<Image src={placeholderImg} width="90%" />}
                    />
                </Col>
                <Col span={12}>
                    <Form name="login-form" onFinish={onLogin}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username' }]}
                        >
                            <Input placeholder="Username" prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password' }]}
                        >
                            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Card>
    );
}
