import React from "react";
import { Link } from "react-router-dom";
import styles from './Pagenotfound.module.css';

export default function NoMatch() {
    return (
      <section className={styles.Page404}>
          <div className={styles.container}>
              <div className={styles.row}>	
                  <div className={styles.Page404Img}>
                      <h1>404</h1>
                  </div>
                  <div className={styles.Page404contentBox}>
                      <h3>Look like you're lost</h3>
                      <p>the page you are looking for not avaible!</p>
                      <Link to="/" className={styles.Page404Link}>Go to Home</Link>
                  </div>
               </div>
          </div>
      </section>
    );
  }