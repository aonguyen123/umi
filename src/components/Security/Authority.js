import Forbidden from '@/components/Security/Forbidden';

function Authority({ children }) {
    console.log('autho');
    const userRoles = ['user', 'manager'];

    if (children.props.route.roles.some(role => userRoles.includes(role))) {
        return children;
    }

    return <Forbidden />;
}

export default Authority;
