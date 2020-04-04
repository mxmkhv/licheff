import React from 'react';
import styles from './Project.module.scss';

const Project = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Project;
