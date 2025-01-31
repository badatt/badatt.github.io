import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import List from 'components/ui/List';
import Tags from 'components/ui/Tags';

import { SectionTitle } from 'helpers/definitions';
import { SkillsUsed, TC } from './styles';

interface Experience {
  node: {
    id: string;
    frontmatter: {
      company: string;
      group: string;
      position: string;
      startDate: string;
      endDate: string;
      main: boolean;
      skills: [string];
      activities: [string];
      kpis: [string];
    };
  };
}

const TimelineContent = (props: { activities: [string]; kpis: [string]; skills: [string] }) => {
  return (
    <TC>
      {props.activities.length > 0 && (
        <>
          <span className="font-bold text-sm">Activities</span>
          <List items={props.activities} />
        </>
      )}
      {props.kpis.length > 0 && (
        <>
          <span className="font-bold text-sm">KPIs</span>
          <List items={props.kpis} />
        </>
      )}
      <SkillsUsed>
        <Tags items={props.skills}></Tags>
      </SkillsUsed>
    </TC>
  );
};

const Experience: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "experiences section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              company
              group
              position
              startDate
              endDate
              main
              skills
              activities
              kpis
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const experiences: Experience[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {experiences.map((item) => {
        const {
          id,
          frontmatter: { company, group, position, startDate, endDate, main, skills, activities, kpis },
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={group}
            subtitle2={position}
            content={<TimelineContent activities={activities} kpis={kpis} skills={skills} />}
            startDate={startDate}
            endDate={endDate}
            main={main}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
