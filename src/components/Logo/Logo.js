import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import LogoIcon from '../../assets/logo.svg';
import styles from './Logo.module.scss';

const Logo = props => (
  <div className={styles.logoContainer}>
    <AniLink to='/' cover direction='right' bg={props.backgroundColor} duration={1}>
      <LogoIcon />
    </AniLink>
  </div>
);

export default Logo;
