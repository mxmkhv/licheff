import React from 'react';
import styles from './Project.module.scss';
import Label from '../Label/Label';

const Project = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.accentColor} style={{ backgroundColor: props.accentColor }} />
        <div className={styles.title}>
          <Label size='1.5em'>{props.title}</Label>
          <div className={styles.subtitle}>
            <span>{props.subtitle}</span>
          </div>
        </div>
      </div>
      <div className={styles.shadow} />
    </div>
  );
};

export default Project;
