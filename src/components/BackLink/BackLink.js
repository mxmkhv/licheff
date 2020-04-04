import React from 'react';
import { Link } from 'gatsby';
import styles from './BackLink.module.scss';
import BackIcon from '../../assets/back.svg';

const BackLink = props => {
  return (
    <div className={styles.link}>
      <Link to='/'>
        <BackIcon />
      </Link>
    </div>
  );
};

export default BackLink;
