import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import InteractionPanel from '../components/InteractionPanel/InteractionPanel';
import Label from '../components/Label/Label';
import BodyText from '../components/BodyText/BodyText';
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
        <BodyText>
          A young multidisciplinary artist with a solid background in User Experience/Interfaces,
          Branding &amp; WEB Design. The dynamics of progress and new challenges developed a keen
          interest in the field of brand perceptions. A self-driven hard worker and a passionate
          freethinker who is always looking forward to expand their worldview.
        </BodyText>
        <Link to='/resume/'>View resume</Link>
      </div>
    </InteractionPanel>
    <Content>Scrollable content here</Content>
  </Layout>
);

export default IndexPage;
