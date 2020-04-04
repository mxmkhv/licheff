import React from 'react';
import styles from './BodyText.module.scss';

const BodyText = props => {
  const color = props.color ? props.color : '';
  return (
    <p className={[styles.text, styles[color]].join(' ')} style={{ 'font-size': props.size }}>
      {props.children}
    </p>
  );
};

export default BodyText;
