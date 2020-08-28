import { Result, Button } from 'antd';
import { Link } from 'umi';

export default function Forbidden() {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <Link to="/">
                    <Button type="primary">Go back</Button>
                </Link>
            }
        />
    );
}
