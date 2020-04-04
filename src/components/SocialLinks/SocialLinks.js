import React from 'react';
import styles from './SocialLinks.module.scss';
import BehanceIcon from '../../assets/behance.svg';
import DribbleIcon from '../../assets/dribble.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

const SocialLinks = props => {
  return (
    <div className={styles.container}>
      <a href='https://www.behance.net' target='_blank'>
        <BehanceIcon />
      </a>
      <a href='https://dribbble.com' target='_blank'>
        <DribbleIcon />
      </a>
      <a href='https://www.linkedin.com/' target='_blank'>
        <LinkedinIcon />
      </a>
      <a href='https://www.instagram.com/' target='_blank'>
        <InstagramIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
