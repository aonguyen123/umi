import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

export default function Loader({ spinning = false, fullScreen }) {
    return (
        <div
            className={classNames(styles.loader, {
                [styles.hidden]: !spinning,
                [styles.fullScreen]: fullScreen,
            })}
        >
            <div className={styles.warpper}>
                <div className={styles.inner} />
                <div className={styles.text}>LOADING</div>
            </div>
        </div>
    );
}
