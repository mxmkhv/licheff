import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import InteractionPanel from '../components/InteractionPanel/InteractionPanel';
import Content from '../components/Content/Content';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <InteractionPanel>
      <h1>Home</h1>
      Interactive content herea
      <Link to='/resume/'>Resume</Link>
    </InteractionPanel>
    <Content>Scrollable content here</Content>
  </Layout>
);

export default IndexPage;
