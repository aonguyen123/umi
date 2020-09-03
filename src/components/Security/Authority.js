import { connect } from 'dva';
import Forbidden from '@/components/Security/Forbidden';
import { ROLES } from '@/contants';

function Authority({ children, roleInfo }) {
    if (ROLES.find(item => item === roleInfo.roleName) === 'Admin') {
        return children;
    }
    return <Forbidden />;
}

export default connect(({ app }) => ({
    roleInfo: app.roleInfo,
}))(Authority);
