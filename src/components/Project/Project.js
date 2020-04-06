import React from 'react';
import styles from './Project.module.scss';
import Label from '../Label/Label';
import Img from 'gatsby-image';

const Project = props => {
  let imageObj;
  let image;

  if (props.image) {
    console.log('yes');
    imageObj = { ...props.image };
    image = <Img objectFit='cover' objectPosition='50% 50%' fluid={imageObj} />;
  }

  console.log(imageObj); //rerenders 4 times????

  return (
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
  );
};

export default Project;
