import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import InteractionPanel from '../components/InteractionPanel/InteractionPanel';
import Label from '../components/Label/Label';
import Content from '../components/Content/Content';
import Logo from '../assets/logo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <InteractionPanel>
      <Logo />
      <div>
        <Label size='2.2em'>Todor Lichev</Label>
        <Label size='1.5em' color='red'>
          Designer
        </Label>
        <Link to='/resume/'>Resume</Link>
      </div>
    </InteractionPanel>
    <Content>Scrollable content here</Content>
  </Layout>
);

export default IndexPage;
