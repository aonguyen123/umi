/**
 *  title: User page
 *  roles: ['user']
 *  Routes:
 *      - ./src/components/Security/Authentication.js
 *      - ./src/components/Security/Authority.js
 */
import { Button } from 'antd';
import { connect } from 'dva';

function User({ dispatch, loadingLogout }) {
    async function onLogout() {
        await dispatch({
            type: 'user/logout',
        });
    }

    return (
        <div>
            <h2>User page</h2>
            <Button onClick={onLogout} loading={loadingLogout} type="primary">
                Logout
            </Button>
        </div>
    );
}

export default connect(({ loading }) => ({
    loadingLogout: loading.effects['user/logout'],
}))(User);
