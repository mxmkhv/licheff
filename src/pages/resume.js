import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Image from '../components/image';

const SecondPage = () => (
  <Layout>
    <SEO title='Resume' />
    <h1>Resume</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
