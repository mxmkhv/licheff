import React from 'react';
import './global.scss';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main>
      <div className={styles.layout}>{children}</div>
    </main>
  );
};
export default Layout;
