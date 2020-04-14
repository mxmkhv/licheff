import React, { useState, useRef, useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './BackLink.module.scss';
import BackIcon from '../../assets/back.svg';
import LogoIcon from '../../assets/logo.svg';

const BackLink = props => {
  const linkRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callback = entries => {
      entries.forEach(entry => {
        setIsVisible(!entry.isIntersecting);
      });
    };

    let observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0
    });

    observer.observe(linkRef.current);

    return function cleanup() {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.link} ref={linkRef}>
      <AniLink to='/' cover direction='right' bg={props.backgroundColor} duration={1}>
        <BackIcon />
      </AniLink>

      <div className={[styles.mobile, isVisible ? styles.visible : ''].join(' ')}>
        <AniLink to='/' cover direction='right' bg={props.backgroundColor} duration={1}>
          <BackIcon />
        </AniLink>
        <div className={styles.mobileLogo}>
          <LogoIcon />
        </div>
      </div>
    </div>
  );
};

export default BackLink;
