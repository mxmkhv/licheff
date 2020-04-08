import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import InteractionPanel from '../components/InteractionPanel/InteractionPanel';
import Label from '../components/Label/Label';
import BodyText from '../components/BodyText/BodyText';
import Content from '../components/Content/Content';
import Logo from '../components/Logo/Logo';
import BackLink from '../components/BackLink/BackLink';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      homepage: file(relativePath: { eq: "konstruktive/homepage.jpg" }) {
        ...ImageFragment
      }
    }
  `);

  return (
    <Layout>
      <SEO title='Hello' />
      <InteractionPanel>
        <Logo backgroundColor='var(--jarvis)' />
        <BackLink backgroundColor='var(--jarvis)' />
        <div>
          <Label size='2.2em'>Jarvis</Label>
          <Label size='1.5em' color='red'>
            App design
          </Label>
          <BodyText>
            Konstruktive Real Estates is a website aiming to showcase our client's projects. The key
            features of the website include searching for properties based on user preferences,
            booking inspection hours, news about the properties and showcasing the projects. I took
            main part in creating the whole UX of the project including wireframes, prototyping in
            InVision and after client's approval turning the UX into UI. Everything was done under
            the competent art direction of Marian Naydenov.
          </BodyText>
        </div>
      </InteractionPanel>
      <Content>
        <div>
          <Label size='1.5em'>Homepage</Label>
          <Image
            objectFit='cover'
            objectPosition='50% 50%'
            fluid={data.homepage.childImageSharp.fluid}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default ProjectPage;
