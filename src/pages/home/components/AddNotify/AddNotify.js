import { Form, Input, Button } from 'antd';

export default function AddNotify({ sendMessage, loading}) {
    return (
        <Form onFinish={sendMessage}>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input message' }]}>
                <Input addonBefore="Message" placeholder="Enter a message" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading.effects['home/addNotify']}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
