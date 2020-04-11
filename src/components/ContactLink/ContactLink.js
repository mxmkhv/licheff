import React from 'react';
import styles from './ContactLink.module.scss';

const BackLink = () => {
  return (
    <div className={styles.link}>
      <a href='mailto:licheff.o@gmail.com'>
        <span data-hover='licheff.o@gmail.com'>Get in touch @</span>
      </a>
    </div>
  );
};

export default BackLink;
