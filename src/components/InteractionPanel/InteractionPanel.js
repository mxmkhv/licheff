import React from 'react';
import styles from './InteractionPanel.module.scss';

const InteractionPanel = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default InteractionPanel;
