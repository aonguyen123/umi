/**
 * title: Home page
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import { connect } from 'dva';
import { useEffect } from 'react';

function Home({ loadingEffect, dispatch }) {
    useEffect(() => {
        dispatch({ type: 'authentication/getMe' });
    }, [dispatch]);

    console.log(loadingEffect);
    return <div>home page</div>;
}

export default connect(({ loading }) => ({
    loadingEffect: loading.effects['authentication/getMe'],
}))(Home);
