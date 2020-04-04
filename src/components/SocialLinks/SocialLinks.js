import React from 'react';
import styles from './SocialLinks.module.scss';
import BehanceIcon from '../../assets/behance.svg';
import DribbleIcon from '../../assets/dribble.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

const SocialLinks = props => {
  return (
    <div className={styles.container}>
      <a href='https://www.behance.net' target='_blank' rel='noopener noreferrer'>
        <BehanceIcon />
      </a>
      <a href='https://dribbble.com' target='_blank' rel='noopener noreferrer'>
        <DribbleIcon />
      </a>
      <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
        <LinkedinIcon />
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
        <InstagramIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
