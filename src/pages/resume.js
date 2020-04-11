import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import InteractionPanel from '../components/InteractionPanel/InteractionPanel';
import Label from '../components/Label/Label';
import BodyText from '../components/BodyText/BodyText';
import BackLink from '../components/BackLink/BackLink';
import Content from '../components/Content/Content';
import Logo from '../components/Logo/Logo';
import resume from '../../content/resume';

export default () => {
  useEffect(() => {
    const screen = document.getElementById('interactionPanel');
    screen.scrollIntoView(true);
  }, []);

  return (
    <Layout>
      <SEO title='Resume' />
      <InteractionPanel>
        <Logo backgroundColor='var(--red)' />
        <BackLink backgroundColor='var(--red)' />
        <div className='resumeDetails'>
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
        </div>
      </InteractionPanel>
      <Content>
        <div className='resume-heading'>
          <Label size='2em'>{resume.title}</Label>
          <Label size='1.5em' color='red'>
            {resume.subtitle}
          </Label>
        </div>

        {resume.positions.map((position, index) => (
          <div className='resume-position' key={`position-${index}`}>
            <h2 className='role'>{position.role}</h2>
            <h3 className='company'>{position.company}</h3>
            <h4 className='period'>{position.period}</h4>
            <ul className='description'>
              {position.description.map((item, i) => (
                <li key={`desc-${i}`}>{item.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </Content>
    </Layout>
  );
};
