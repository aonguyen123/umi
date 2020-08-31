import { Layout } from 'antd';
import styles from './styles.css';

const { Footer } = Layout;

export default function GlobalFooter() {
    return (
        <Footer className={styles.globalFooter}>
            dva&copy;2020 <span className={styles.copyright}>aonguyen</span>
        </Footer>
    );
}
