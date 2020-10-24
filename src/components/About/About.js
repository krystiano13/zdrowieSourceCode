import React from 'react';
import styles from './About.module.scss';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Projekt stworzony</h1>
            <h1>przez</h1>
            <h1>Krystiana Zieję</h1>
            <h1>Na konkurs programistyczny</h1>
            <h1>Hack Heroes</h1>

            <NavLink
                className={styles.navlink}
                exact
                to="/zdrowie/content/"
            >
            <button>Powrót</button>
            </NavLink>
        </div>
    )
}

export default About;