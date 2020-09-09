/**
 * title: Notify detail
 * Routes:
 * - ./src/components/Security/Authentication.js
 */

import React from 'react';
import { connect } from 'dva';
import { Card, Descriptions } from 'antd';
import moment from 'moment';
import styles from './styles.css';

export default connect(({ home, loading }) => ({
    notifyDetail: home.notifyDetail,
    loading,
}))(function({ notifyDetail, loading }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Card loading={loading.effects['home/getNotifyDetail']}>
                    <Descriptions title="Message detail" bordered>
                        <Descriptions.Item span={3} label="Creator">
                            {notifyDetail?.idUser?.username}
                        </Descriptions.Item>
                        <Descriptions.Item span={3} label="Content">
                            {notifyDetail.name}
                        </Descriptions.Item>
                        <Descriptions.Item span={3} label="Create date">
                            {moment(notifyDetail.createdAt).format('DD/MM/YYYY')}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        </div>
    );
});
