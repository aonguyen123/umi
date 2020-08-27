/**
 * title: Intro
 *
 */
import { Link } from 'umi';
import { connect } from 'dva';

export default connect(({ authentication }) => ({
    currentUser: authentication.currentUser,
}))(function({ currentUser }) {
    console.log(currentUser);

    return (
        <div>
            <h2>public page</h2>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/home">home page</Link>
        </div>
    );
});
