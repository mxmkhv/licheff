import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './ProjectListing.module.scss';
import Project from '../Project/Project';
import Img from 'gatsby-image';

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    query {
      konstruktive: file(relativePath: { eq: "konstruktive/cover.png" }) {
        ...ImageFragment
      }
      jarvis: file(relativePath: { eq: "gatsby-icon.png" }) {
        ...ImageFragment
      }
    }
  `);

  return (
    <div className={styles.container}>
      <Project
        to='/project-konstruktive'
        title='Konstruktive Real Estates'
        subtitle='Web design'
        accentColor='yellow'
        image={data.konstruktive.childImageSharp.fluid}
      />
      <Project title='Konstruktive Real Estates' subtitle='Web design' accentColor='green' />
      <Project title='Konstruktive Real Estates' subtitle='Web design' accentColor='cyan' />
      <Project title='Konstruktive Real Estates' subtitle='Web design' accentColor='yellow' />
    </div>
  );
};

export default ProjectListing;
