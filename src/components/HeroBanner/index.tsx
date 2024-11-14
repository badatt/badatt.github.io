import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { SectionTitle } from 'helpers/definitions';
import { calculateExperience } from '../../helpers/utils';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import List from 'components/ui/List';
import TitleSection from 'components/ui/TitleSection';
import * as Styled from './styles';

interface SectionHeroBanner extends SectionTitle {
  summary: string;
  linkTo: string;
  linkText: string;
  dataOfJoining: string;
  about: [string];
}

const HeroBanner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          summary
          linkTo
          linkText
          dataOfJoining
          about
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;
  const experience = calculateExperience(heroBanner.dataOfJoining);
  heroBanner.summary = heroBanner.summary.replace('{{experience}}', experience);

  return (
    <Styled.Banner>
      <Container section>
        <TitleSection title={heroBanner.title} subtitle={heroBanner.subtitle} />
        <Styled.Content>{heroBanner.summary}</Styled.Content>
        <List items={heroBanner.about} />
        <Link to={heroBanner.linkTo}>
          <Button primary>{heroBanner.linkText}</Button>
        </Link>
      </Container>
    </Styled.Banner>
  );
};

export default HeroBanner;
