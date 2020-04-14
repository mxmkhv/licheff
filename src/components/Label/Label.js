import React from 'react';
import styles from './Label.module.scss';

const Label = props => {
  const color = props.color ? props.color : '';
  const font = props.font ? props.font : '';

  return (
    <span
      className={[styles.label, styles[color], styles[font]].join(' ')}
      style={{ fontSize: props.size }}
    >
      {props.children}
    </span>
  );
};

export default Label;
