import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import FormatHtml from 'components/utils/FormatHtml';
import * as Styled from './styles';

interface IPd {
  node: {
    html: React.ReactNode;
  };
}

const Pd: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "pd" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  const html: IPd = allMarkdownRemark.edges[0];

  return (
    <Styled.Pd>
      <FormatHtml className="pd" content={html.node.html} />
    </Styled.Pd>
  );
};

export default Pd;
