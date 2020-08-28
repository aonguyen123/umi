import Forbidden from '@/components/Security/Forbidden';
import storage from '@/utils/storage';
import { ROLES } from '@/contants';

function Authority({ children }) {
    const role = ROLES.find(item => item.role === JSON.parse(storage.getAuthority()));
    if (role.value === 'Admin') {
        return children;
    }
    return <Forbidden />;
}

export default Authority;
