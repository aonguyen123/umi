/**
 * title: Home page
 * Routes:
 * - ./src/components/Security/Authentication.js
 */
import Notifies from './components/Notifies';
import styles from './styles.css';

function Home() {
    return (
        <div className={styles.container}>
            <Notifies />
        </div>
    );
}

export default Home;
