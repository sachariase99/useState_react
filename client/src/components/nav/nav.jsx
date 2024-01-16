import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link className={styles.link} to="/">Home</Link></li>
                <li><Link className={styles.link} to="/greeting">Greeting</Link></li>
                <li><Link className={styles.link} to="/counter">Counter</Link></li>
                <li><Link className={styles.link} to="/todo">To Do</Link></li>
                <li><Link className={styles.link} to="/stopwatch">Stopwatch</Link></li>
            </ul>
        </nav>
    )
}

export default Nav