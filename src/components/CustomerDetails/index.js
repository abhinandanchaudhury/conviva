import React from 'react';
import Loader from '../Loader';
import {api} from '../../api';
import CustomerAddress from './CustomerAddress';
import styles from './CustomerDetails.module.css';

class CustomerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            custData: null,
            custDetail: null,
            errorFetch: false,
            errorFetchCust: false,
            loader: true,
            loaderAddr: false,
            currentPage: 1
        };
    }
    componentDidMount = async () => {
        const {currentPage} = this.state;
        try{
        let response = await api(`customers/${currentPage}`);
        
            if (response.ok) { 
            let json = await response.json();
            this.setState({
                custData: json,
                errorFetch: false,
                loader: false
            });
          } else {
            this.setState({
                custData: null,
                errorFetch: true,
                loader: false
            });
          };
        } catch(error) {
            this.setState({
                custData: null,
                errorFetch: true,
                loader: false
            });
        }
    };
    showDetails = async(custId) => {
        const { currentPage } = this.state;
        this.setState({loaderAddr:true});
        let response = await api(`customers/${currentPage}/${custId}`);
        if (response.ok) { 
            let json = await response.json();
            this.setState({
                custDetail: json,
                errorFetchCust: false,
                loaderAddr: false
            });
          } else {
            this.setState({
                custDetail: null,
                errorFetchCust: true,
                loaderAddr: false
            });
          }
    }
    generateCustTbl = () => {
        const {custData} = this.state;       
        return (custData.map((item, index) => {
            return (<tr key={index} onClick={() => {this.showDetails(item.id)}}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>);
        }));
    };

    render(){
        const { custData, errorFetch, custDetail, errorFetchCust, loader, loaderAddr } = this.state;
        const colFrt = `${styles.Col} ${styles.ColFirst}`;
        return (
            <div className={styles.ColContainer}>
                <h1>Customer Detail Section:</h1>
                {loader && <Loader />}
                <div className={styles.ColContainerInner}>
                {(errorFetch && !custData) && <p className={styles.errorMsg}>There is some error in loading the customers</p>}
                    <div className={colFrt}>
                        {!errorFetch && custData && 
                            <table id={styles.Customers}>
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>Customer ID</th>
                                        <th>Customer Name</th>
                                        <th>Customer Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.generateCustTbl()}
                                </tbody>
                            </table>}
                    </div>
                    {!errorFetch && !loader && <CustomerAddress loader={loaderAddr} custDetail={custDetail} errorFetchCust={errorFetchCust} errorFetch={errorFetch} />}
                </div>
            </div>
        );
    }
}

export default CustomerDetails;