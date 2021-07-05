import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { ImageWrapper } from "../components/ImageWrapper";
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    "title": "Build analytical narratives from scratch, faster",
    "description": (
      <>
        Tellery comes with a bucket of building blocks and rich text styling features.
        Want a feature-specific analysis? An anomalies investigation? 
        A Campaign-oriented dashboard? Tell story your own way. 
        Stop copy-pasting screenshot of charts between tabs.
      </>
    ),
    "image": {
      "url": "/img/home/screenshot-1.png",
      "width": 695,
      "height": 494
    },
  },
  {
    "title": "Design for collaborative analytics",
    "description": (
      <>
        Tellery allows you abstract essential business logic, and
        reference it in future contexts. 
        Stop writing duplicated metrics calculation over and over gain.
      </>
    ),
    "image": {
      "url": "/img/home/screenshot-2.png",
      "width": 600,
      "height": 482
    },
  },
  {
    "title": "Streamlined Analysis",
    "description": (
      <>
        Edit analytic code and configure visualization options without leaving your current context. 
        Answer questions in seconds. Put your explanations.
      </>
    ),
    "image": {
      "url": "/img/home/screenshot-1.png",
      "width": 600,
      "height": 482
    }
  },
]

export const HomepageFeatures = () => {
  
  return (
    <section id='features' className={styles.features}>
   
     {FeatureList.map((item, idx) => (
        <FeatureWrapper item={item} contentOnLeft={idx % 2 == 1} />
      ))}

    </section>
  );
};

const FeatureWrapper = ({item, contentOnLeft}) => {
  const content = (
    <>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </>
  );
  const image = (
    <>
      <ImageWrapper src={useBaseUrl(item.image.url)} 
        width={item.image.width} 
        height={item.image.height} />
    </> 
  );
  
  return contentOnLeft ? <Feature left={content} right={image} />
   : <Feature left={image} right={content} />
}

const Feature = ({ left, right }) => {
  return (
    <div className={styles.feature}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default HomepageFeatures;
