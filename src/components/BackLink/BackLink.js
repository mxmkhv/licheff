import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './BackLink.module.scss';
import BackIcon from '../../assets/back.svg';

const BackLink = props => {
  return (
    <div className={styles.link}>
      <AniLink to='/' cover direction='right' bg='#546e7a' duration={1}>
        <BackIcon />
      </AniLink>
    </div>
  );
};

export default BackLink;
