import { List, Avatar } from 'antd';
import { Link } from 'umi';

function Notifies({ loading, notifies, location }) {
    return (
        <div>
            <List
                loading={loading.effects['home/getNotify']}
                itemLayout="horizontal"
                bordered
                dataSource={notifies}
                renderItem={item => (
                    <List.Item
                        actions={[<Link to={`${location.pathname}/${item._id}`}>edit</Link>]}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar src={item.idUser.avatar}>
                                    {item.idUser.username.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            title={item.idUser.username}
                            description={item.name}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Notifies;
