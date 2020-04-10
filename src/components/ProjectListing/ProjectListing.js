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
            color
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes;

  return (
    <div className={styles.container}>
      {projects.map((project, index) => (
        <ProjectItem
          key={`image-${index}`}
          to={project.frontmatter.slug}
          title={project.frontmatter.title}
          subtitle={project.frontmatter.category}
          accentColor={project.frontmatter.color}
          image={project.frontmatter.featuredImage.childImageSharp.fluid}
        />
      ))}
    </div>
  );
};

export default ProjectListing;
