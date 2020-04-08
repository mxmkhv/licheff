import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './ProjectListing.module.scss';
import ProjectItem from '../ProjectItem/ProjectItem';

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    query {
      konstruktive: file(relativePath: { eq: "konstruktive/cover.png" }) {
        ...ImageFragment
      }
      jarvis: file(relativePath: { eq: "konstruktive/cover.png" }) {
        ...ImageFragment
      }
    }
  `);

  return (
    <div className={styles.container}>
      <ProjectItem
        to='/project-konstruktive'
        title='Konstruktive Real Estates'
        subtitle='Web design'
        accentColor='var(--konstruktive)'
        image={data.konstruktive.childImageSharp.fluid}
      />
      <ProjectItem
        to='/project-jarvis'
        title='Jarvis'
        subtitle='App design'
        accentColor='var(--jarvis)'
        image={data.jarvis.childImageSharp.fluid}
      />
    </div>
  );
};

export default ProjectListing;
