import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

/*

data:
{data.name}
{data.title}
{data.shortBio.shortBio}

*/

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>Australia sin filtros</h3>
      <p className={styles.heroTitle}>Vivir, trabajar, viajar. </p>
      <p>Todo sobre vivir en Australia con Work and Holiday Visa</p>
    </div>
  </div>
)
