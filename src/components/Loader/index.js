import React from 'react';
import styles from './Loader.module.css';
const Loader = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Loader}>
                <span />
                <span />
            </div>
        </div>
    );
};

export default React.memo(Loader);