import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ImageSharpFluid } from 'helpers/definitions';
import FormatHtml from 'components/utils/FormatHtml';
import * as Styled from './styles';

interface IPd {
  node: {
    html: React.ReactNode;
  };
}

const Pd: React.FC = () => {
  const { allMarkdownRemark, profile5, profile6, profile1 } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "pd" } } }) {
        edges {
          node {
            html
          }
        }
      }
      profile5: file(relativePath: { eq: "profile-5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile6: file(relativePath: { eq: "profile-6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile1: file(relativePath: { eq: "profile-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const html: IPd = allMarkdownRemark.edges[0];
  const profilePic5: ImageSharpFluid = profile5.childImageSharp.fluid;
  const profilePic6: ImageSharpFluid = profile6.childImageSharp.fluid;
  const profilePic1: ImageSharpFluid = profile1.childImageSharp.fluid;

  return (
    <>
      <Styled.Images>
        <Img fluid={profilePic5} />
        <Img fluid={profilePic6} />
        <Img fluid={profilePic1} />
      </Styled.Images>
      <Styled.Details>
        <FormatHtml className="pd" content={html.node.html} />
      </Styled.Details>
    </>
  );
};

export default Pd;
