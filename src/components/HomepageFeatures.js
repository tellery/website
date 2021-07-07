
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import { ImageWrapper } from '../components/ImageWrapper'
import { VideoWrapper } from '../components/VideoWrapper'

import styles from './HomepageFeatures.module.css'


const FeatureList = [
  {
    title: 'Build analytical narratives from scratch, faster',
    description: (
      <>
        Tellery comes with a bucket of building blocks and rich text styling features.
        Want a feature-specific analysis? An anomalies investigation? A campaign-oriented
        dashboard? Tell story your own way. No more copy-pasting screenshot of charts.
      </>
    ),
    image: {
      url: '/img/home/feature-1.png',
      width: 1800,
      height: 2049
    }
  },
  {
    title: 'Design for collaborative analytics',
    description: (
      <>
        Enough of calculating duplicated metrics over and over again? Tellery allows
        you abstract essential business logic, and reference it in future contexts.
      </>
    ),
    image: {
      url: '/img/home/feature-2.png',
      width: 1800,
      height: 1446
    }
  },
  {
    title: 'Streamlined Analysis',
    description: (
      <>
        Edit analytic code and configure visualization options without leaving your current context.
        Answer questions and put explanations in seconds.
      </>
    ),
    video: {
      url: '/img/home/feature-3.mp4',
      width: 1920,
      height: 1080,
    },
  },
];


export const HomepageFeatures = () => {
  return (
    <section id="features" className={styles.features}>
      {FeatureList.map((item, idx) => (
        <FeatureWrapper key={item.title} item={item} contentOnLeft={idx % 2 == 1} />
      ))}
    </section>
  )
}

const FeatureWrapper = ({ item, contentOnLeft }) => {
  const content = (
    <>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </>
  );
  const imageOrVideo = ('image' in item) ? (
    <>
      <ImageWrapper
        src={useBaseUrl(item.image.url)}
        width={item.image.width}
        height={item.image.height}
      />
    </>  
  ) : (
    <>
      <VideoWrapper
        src={useBaseUrl(item.video.url)}
        width={item.video.width}
        height={item.video.height}
      />
    </> 
  );

  return contentOnLeft ? (
    <Feature left={content} right={imageOrVideo} />
  ) : (
    <Feature left={imageOrVideo} right={content} />
  );
};

const Feature = ({ left, right }) => {
  return (
    <div className={styles.feature}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

export default HomepageFeatures
