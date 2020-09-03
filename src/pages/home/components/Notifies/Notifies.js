import { List, Avatar } from 'antd';
import { connect } from 'dva';

function Notifies({ notifies, loading }) {
    console.log(notifies);
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
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
