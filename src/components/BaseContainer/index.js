import React from 'react';
import CustomerDetails from '../CustomerDetails';
import styles from './BaseContainer.module.css';

class BaseConatiner extends React.Component{
    render() {
        return(
            <div className={styles.Container}>
                <CustomerDetails />
            </div>
        );
    }
}

export default BaseConatiner;