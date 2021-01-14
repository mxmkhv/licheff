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
            <Label size='1.2em' color='red' font='serif'>
              Bio
            </Label>
          </BodyText>
          <BodyText>
            Multidisciplinary designer with 8+ years of professional experience in the fields of
            user experience, mobile & web design and branding. I’m a self-driven hard worker and a
            passionate freethinker who is always looking forward to expanding their worldview.
            Constantly pushing myself to learn and adopt new technologies and find better solutions
            for everyday products. <br />
            My professional design journey started with an internship position in an advertising
            agency based in Sofia, Bulgaria. Working under tight deadlines and pushing my creativity
            to the limits, I expanded my skills and gained most of my experience. I had the chance
            to work on all kinds of different projects, including print, digital, social, packaging
            and a lot of everything. <br />I found out I was passionate about creating good-looking
            websites and understanding the needs of their users. This led me to my current position
            - a UX designer at Milestone Systems - an international company focusing on IP-based
            video management products. Currently I’m responsible for creating a unique experience
            for the mobile application working closely with a whole team of professionals.
          </BodyText>
          <BodyText>
            <Label size='1.2em' color='red' font='serif'>
              Skills
            </Label>
          </BodyText>
          <BodyText>Visual design, UI/UX design, interaction design, design systems</BodyText>
          <ContactLink />
        </div>
      </InteractionPanel>
      <Content>
        <div className='resume-heading'>
          <Label size='2em'>{resume.title}</Label>
          <Label size='1.2em' color='red' font='serif'>
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
