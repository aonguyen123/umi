/**
 * title: Message detail
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import { connect } from 'dva';
import { Descriptions, Spin } from 'antd';
import moment from 'moment';
import styles from './../styles.css';

function MessageDetail({ loading, notifyDetail }) {
    if (loading.effects['home/getNotifyDetail']) {
        return <Spin />;
    }

    return (
        <div className={styles.messDetail}>
            <Descriptions title="Message info">
                <Descriptions.Item label="Message name">{notifyDetail.name}</Descriptions.Item>
                <Descriptions.Item label="Phone">{notifyDetail.idUser.phone}</Descriptions.Item>

                <Descriptions.Item label="Creator">
                    {notifyDetail.idUser.username}
                </Descriptions.Item>
                <Descriptions.Item label="Create date">
                    {moment(notifyDetail.createdAt).format('DD/MM/YYYY')}
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
}
export default connect(({ home, loading }) => ({
    notifyDetail: home.notifyDetail,
    loading,
}))(MessageDetail);
