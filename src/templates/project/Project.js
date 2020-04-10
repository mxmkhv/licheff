import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/seo';
import InteractionPanel from '../../components/InteractionPanel/InteractionPanel';
import Label from '../../components/Label/Label';
import BodyText from '../../components/BodyText/BodyText';
import Content from '../../components/Content/Content';
import Logo from '../../components/Logo/Logo';
import BackLink from '../../components/BackLink/BackLink';
import styles from './Project.module.scss';
import { graphql } from 'gatsby';

const ProjectPage = ({ pageContext, data: { project } }) => {
  return (
    <Layout>
      <SEO title={pageContext.slug} />
      <InteractionPanel>
        <Logo backgroundColor='var(--konstruktive)' />
        <BackLink backgroundColor='var(--konstruktive)' />
        <div>
          <Label size='2.2em'>{project.frontmatter.title}</Label>
          <Label size='1.5em' color='red'>
            {project.frontmatter.category}
          </Label>
          <BodyText>{project.frontmatter.description}</BodyText>
        </div>
      </InteractionPanel>
      <Content>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: project.html }} />
      </Content>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        category
        description
      }
      html
    }
  }
`;

export default ProjectPage;
