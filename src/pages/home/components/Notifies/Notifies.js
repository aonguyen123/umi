import { List, Avatar } from 'antd';
import { connect } from 'dva';

function Notifies({ notifies, loading }) {
    return (
        <div>
            <List
                loading={loading.effects['home/getNotify']}
                itemLayout="horizontal"
                dataSource={notifies}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src={item.idUser.avatar}>{item.idUser.username.charAt(0).toUpperCase()}</Avatar>
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

export default connect(({ home, loading }) => ({
    notifies: home.notifies,
    loading,
}))(Notifies);
