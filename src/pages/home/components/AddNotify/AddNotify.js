import { Form, Input, Button } from 'antd'

export default function AddNotify() {
    function onSendMessage(values) {
        console.log(values)
    }

    return (
        <Form onFinish={onSendMessage}>
            <Form.Item name='notify' rules={[{required: true, message: 'Please input message'}]}>
                <Input addonBefore="Message" placeholder='Enter a message' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    )
}
