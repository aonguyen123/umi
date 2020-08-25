// import styles from './index.css';
import { Link } from 'umi';

export default function() {
    return (
        <div>
            <h2>public page</h2>
            <Link to="/user">Auth page</Link>
        </div>
    );
}
