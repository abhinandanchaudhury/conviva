import React from 'react';
import Loader from '../Loader';
import styles from './CustomerAddress.module.css';

const CustomerAddress = (props) => {
        const {errorFetchCust, errorFetch, custDetail, loader} = props;      
        return (
            <div className={styles.Col}>
                <h2>Customer Address</h2>
                {loader && <Loader />}
                {!errorFetch && !custDetail && !loader && !errorFetchCust && <p>Click any row to get the address details of the customer</p>}
                {(errorFetchCust && !loader && !custDetail) && <p className={styles.errorMsg}>There is some error in loading the customer address</p>}
                {!loader && !errorFetchCust && custDetail && custDetail.address && <div className={styles.AddressDetails}>
                    <div className={styles.Row}>
                        <span className={styles.Bold}>Customer Name:</span> {custDetail.name}
                    </div>
                    <div className={styles.Row}>
                        <span className={styles.Bold}>Customer Id:</span> {custDetail.id}
                    </div>
                    <div className={styles.Row}>
                        <span className={styles.Bold}>City:</span> {custDetail.address.city}
                    </div>
                    <div className={styles.Row}>
                        <span className={styles.Bold}>Street:</span> {custDetail.address.street}
                    </div>
                    <div className={styles.Row}>
                        <span className={styles.Bold}>Suite:</span> {custDetail.address.suite}
                    </div>
                    <div className={`${styles.Row} ${styles.RowLast}`}>
                        <span className={styles.Bold}>Zip:</span> {custDetail.address.zipcode}
                    </div>
                </div>}
            </div>
        )
}

export default React.memo(CustomerAddress);