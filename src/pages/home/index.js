/**
 * title: Home page
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import { connect } from 'dva';

function Home({ loadingEffect, dispatch }) {
    return <div>home page</div>;
}

export default connect(({ loading }) => ({
    loadingEffect: loading.effects['authentication/getMe'],
}))(Home);
