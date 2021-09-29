import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import { ImageWrapper } from '../components/ImageWrapper'
import { VideoWrapper } from '../components/VideoWrapper'

import styles from './HomepageFeatures.module.css'

const IrisPieChart = () => {
  return (
    <div className={styles.irisPieChart}>
      <div className={styles.chart}>
        <div className={styles.chartHeader}>data from iris_csv</div>
        <div className={styles.pidChart}>
          <img src={useBaseUrl('/img/home/feature-pie-chart.png')} width={92} height={92} />
        </div>
        <div className={styles.chartFotter}>2 days ago</div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.text}>
        This is the "Iris" dataset. Originally published at UCI Machine Learning Repository: Iris Data Set, this small
        dataset from 1936 is often used for testing out machine learning algorithms and visualizations (for example,
        Scatter Plot). Each row of the table represents an iris flower, including its species and dimensions of its
        botanical parts, sepal and petal, in centimeters.
      </div>
    </div>
  )
}

const FeatureInteractive = () => {
  return (
    <div className={styles.featureInteractive}>
      <div className={styles.featureInteractiveRow}>
        <div className={styles.featureTableAndNumber}>
          <ImageWrapper
            className={styles.shadow}
            src={useBaseUrl('/img/home/feature-table.png')}
            width={716}
            height={468}
          />
          <div className={styles.featureNumberChart}>
            <ImageWrapper
              className={styles.shadow}
              src={useBaseUrl('/img/home/feature-number-chart.png')}
              width={486}
              height={284}
            />
          </div>
        </div>
        <div className={styles.featureSlashCommand}>
          <ImageWrapper
            className={styles.shadow}
            src={useBaseUrl('/img/home/slash-command.png')}
            width={300}
            height={611}
          />
        </div>
      </div>
      <IrisPieChart />
    </div>
  )
}

const FeatureList = [
  {
    Left: FeatureInteractive,
    Right: () => (
      <>
        {' '}
        <h3>Build beautiful documents & dashboards visually</h3>
        <p>
           An editor with rich text styling features, slash commands, and markdown support.
           Share insights across your team.
        </p>
      </>
    )
  },
  {
    Left: () => (
      <>
        {' '}
        <h3>Give your non-tech teams superpowers</h3>
        <p>
          Let business users extract metrics in just a few clicks. 
          No longer communicate in tables and columns.
        </p>
      </>
    ),
    Right: () => <ImageWrapper  src={useBaseUrl('/img/home/feature-non-tech.png')} width={928} height={585} />
  },
  {
    Right: () => (
      <>
        {' '}
        <h3>Design for collaborative analytics</h3>
        <p>
          Tellery allows you model your data with just SQL. Metrics are no longer scattered across tools and recreated with no oversight.
        </p>
      </>
    ),
    Left: () => <ImageWrapper src={useBaseUrl('/img/home/feature-2.png')} width={1800} height={1446} />
  },
]

export const HomepageFeatures = () => {
  return (
    <section id="features" className={styles.features}>
      {FeatureList.map((item, idx) => (
        <Feature key={idx} Left={item.Left} Right={item.Right} contentOnLeft={idx % 2 == 1} />
      ))}
    </section>
  )
}

const Feature = ({ Left, Right }) => {
  return (
    <div className={styles.feature}>
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  )
}

export default HomepageFeatures
