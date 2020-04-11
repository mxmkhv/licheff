import React from 'react';
import styles from './ContactLink.module.scss';

const BackLink = props => {
  return (
    <div className={styles.link}>
      <a href='mailto:someone@yoursite.com'>
        <span data-hover='licheff.o@gmail.com'>Get in touch @</span>
      </a>
    </div>
  );
};

export default BackLink;
