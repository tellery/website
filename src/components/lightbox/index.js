import React from 'react';

import styles from './styles.module.css';

function Lightbox({children, src, title}) {

  return (
    <div>
        <div className={styles.docImage}>
          <img alt={title} src={src} />
        </div>
        <div className={styles.footer}>
          <div class="button-group button-group--block">
            <a href="https://tellery.io/docs/getting-started/overview"
              target="_blank" 
              rel="noopener noreferrer"
              class="button button--secondary">Try it now!
            </a>
          </div>
        </div>
    </div>
  );
}

export default Lightbox;