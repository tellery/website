import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
 
const FeatureList = [
  {
    title: 'Streamlined Analysis',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tellery allows you edit your analytics code and visualization options 
        without leaving your current context.
      </>
    ),
  },
  {
    title: 'Modular SQL',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tellery allows you abstract essential business logic, and reference it 
        anywhere. Stop writing duplicated SQLs to calculate similar 
        metrics over and over gain. 
      </>
    ),
  },
  {
    title: 'All-in-one workspace',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tellery allows you customize your deliverables from dozens of building
        blocks. Want a KPI dashboard? A weekly report? A deep user segment research?
        Tell story your own way. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
