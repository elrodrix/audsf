import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

/**
<li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
 */

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
)
