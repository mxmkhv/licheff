import React from 'react';
import styles from './Label.module.scss';

const Label = props => {
  const color = props.color ? props.color : '';
  return (
    <span className={[styles.label, styles[color]].join(' ')} style={{ 'font-size': props.size }}>
      {props.children}
    </span>
  );
};

export default Label;
