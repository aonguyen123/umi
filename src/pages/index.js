/**
 * title: Dva Umi
 *
 */
import { Link } from 'umi';
import { connect } from 'dva';
import { Button } from 'antd';
import Loader from '@/components/Loader/Loader';
import './index.css';

export default connect(({ loading }) => ({
    loading,
}))(function({ dispatch, loading }) {
    // console.log(loading.effects['app/query']);

    return (
        <div>
            <h2>public page</h2>
        </div>
    );
});
