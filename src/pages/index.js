/**
 * title: Dva Umi
 *
 */
import { Link } from 'umi';
import { connect } from 'dva';
import { Button } from 'antd';
import './index.css';

export default connect(({ authentication, loading }) => ({
    currentUser: authentication.currentUser,
    loadingLogout: loading.effects['authentication/logout'],
}))(function({ currentUser, loadingLogout, dispatch }) {
    function onLogout() {
        dispatch({
            type: 'authentication/logout',
        });
    }

    return (
        <div>
            <h2>public page</h2>
            {currentUser && Object.keys(currentUser).length > 0 ? (
                <>
                    <h2>User: {currentUser.username}</h2>
                    <Button onClick={onLogout} loading={loadingLogout} type="primary">
                        Logout
                    </Button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <br />
            <Link to="/home">home page</Link>
            <br />
            <Link to="/admin">admin page</Link>
        </div>
    );
});
