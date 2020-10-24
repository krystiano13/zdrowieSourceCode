import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.Nav}>
                <NavLink to="/zdrowie/content/covid" className={styles.link}>
                    <div className={styles.el}>
                        <div className={styles.image1}></div>
                        <h1 className={styles.title}>Covid Monitor</h1>
                    </div>
                </NavLink>
            </div>
            <div className={styles.Nav2}>
                <NavLink to="/zdrowie/content/calc" className={styles.link}>
                    <div className={styles.el}>
                        <div className={styles.image2}></div>
                        <h1 className={styles.title}>Kalkulator BMI</h1>
                    </div>
                </NavLink>
            </div>
        </div>
        <div className={styles.wrapper2}>
            <div className={styles.Nav3}>
                <NavLink to="/zdrowie/content/calories" className={styles.link}>
                    <div className={styles.el}>
                        <div className={styles.image1}></div>
                        <h1 className={styles.title}>Licznik kalorii</h1>
                    </div>
                </NavLink>
            </div>
            <div className={styles.Nav4}>
                <NavLink to="/zdrowie/content/about" className={styles.link}>
                    <div className={styles.el}>
                        <div className={styles.image2}></div>
                        <h1 className={styles.title}>O Projekcie</h1>
                    </div>
                </NavLink>
            </div>
        </div>
        
        </>
    )
}

export default Navigation;