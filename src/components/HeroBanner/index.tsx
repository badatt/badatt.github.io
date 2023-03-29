import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';
import FormatHtml from "components/utils/FormatHtml";
import {calculateExperience} from "../../helpers/utils";

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
  dataOfJoining: string;
}

interface SummaryBanner {
  node: {
    html: React.ReactNode;
  };
}

const HeroBanner: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
          dataOfJoining
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "hero section" } } }
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;
  const html: SummaryBanner = allMarkdownRemark.edges[0];
  heroBanner.content = heroBanner.content.replace("{{experience}}", `${calculateExperience(heroBanner.dataOfJoining)}`)

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={
        <>
          <FormatHtml className="" content={heroBanner.content} />
          <br/>
          <FormatHtml className="styled-list" content={html.node.html} />
        </>
      }
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default HeroBanner;
