import React from 'react';
import styles from './ProjectItem.module.scss';
import Label from '../Label/Label';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Project = props => {
  let imageObj;
  let image;

  if (props.image) {
    imageObj = { ...props.image };
    image = <Image objectPosition='50% 50%' fluid={imageObj} />;
  }

  return (
    <AniLink to={`/${props.to}`} cover direction='left' bg={props.accentColor} duration={1}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.accentColor} style={{ backgroundColor: props.accentColor }} />
          <div className={styles.image}>{image}</div>
          <div className={styles.title}>
            <Label size='1.5em'>{props.title}</Label>
            <div className={styles.subtitle}>
              <span>{props.subtitle}</span>
            </div>
          </div>
        </div>
        <div className={styles.shadow} />
      </div>
    </AniLink>
  );
};

export default Project;
