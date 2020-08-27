/**
 *  title: User page
 *  roles:
 *      - admin
 *      - manager
 *  Routes:
 *      - ./src/components/Security/Authentication.js
 */
import { Button } from 'antd';
import { connect } from 'dva';

function Auth({ dispatch, loadingLogout }) {
    function onLogout() {
        dispatch({
            type: 'authentication/logout',
        });
    }

    return (
        <div>
            <h2>Authentication page</h2>
            <Button onClick={onLogout} loading={loadingLogout} type="primary">
                Logout
            </Button>
        </div>
    );
}

export default connect(({ loading }) => ({
    loadingLogout: loading.effects['authentication/logout'],
}))(Auth);
