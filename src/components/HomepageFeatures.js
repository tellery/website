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
        <h3>Explore, analyze and share analytics in one place</h3>
        <p>
          Tellery comes with a bucket of building blocks and rich text styling features. 
          From reports to dashboards, you can tailor it to your need to unlock the value of data.
        </p>
      </>
    )
  },
  {
    Left: () => (
      <>
        {' '}
        <h3>Design for collaborative analytics</h3>
        <p>
          Enough of calculating duplicated metrics over and over again? Tellery allows you abstract essential data 
          transformation/business logic. Metrics can be maintained easily across reports and dashboards.
        </p>
      </>
    ),
    Right: () => <ImageWrapper src={useBaseUrl('/img/home/feature-2.png')} width={1800} height={1446} />
  },
  {
    Left: () => <ImageWrapper src={useBaseUrl('/img/home/feature-3.png')} width={2110} height={1394} />,
    Right: () => (
      <>
        <h3>Multiplayer and built for web</h3>
        <p>
          With Tellery, you can collaborate and review work in real-time. 
          Bring timely and trusted data to your team.
        </p>
      </>
    )
  }
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
