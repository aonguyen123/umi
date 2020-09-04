import { Form, Input, Button } from 'antd';

export default function AddNotify({ sendMessage }) {
    return (
        <Form onFinish={sendMessage}>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input message' }]}>
                <Input addonBefore="Message" placeholder="Enter a message" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
