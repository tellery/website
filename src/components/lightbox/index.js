import React from 'react';

import styles from './styles.module.css';

function Lightbox({children, src, title}) {

  return (
    <div>
        <img className={styles.docImage} alt={title} src={src} />  
        <p className={styles.title}><em>{ title }</em></p>
    </div>
  );
}

export default Lightbox;