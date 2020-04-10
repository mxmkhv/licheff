import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './ProjectListing.module.scss';
import ProjectItem from '../ProjectItem/ProjectItem';

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
            category
            image
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes;

  return (
    <div className={styles.container}>
      {projects.map(project => (
        <ProjectItem
          to={project.frontmatter.slug}
          title={project.frontmatter.title}
          subtitle={project.frontmatter.category}
          accentColor='var(--konstruktive)'
          // image={data.konstruktive.childImageSharp.fluid}
        />
      ))}
    </div>
  );
};

export default ProjectListing;
