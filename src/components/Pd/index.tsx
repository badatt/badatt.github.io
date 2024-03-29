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
  const { allMarkdownRemark, profile1, profile2, profile3, profile4 } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "pd" } } }) {
        edges {
          node {
            html
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
      profile2: file(relativePath: { eq: "profile-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile3: file(relativePath: { eq: "profile-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile4: file(relativePath: { eq: "profile-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const html: IPd = allMarkdownRemark.edges[0];
  const profilePic1: ImageSharpFluid = profile1.childImageSharp.fluid;
  const profilePic2: ImageSharpFluid = profile2.childImageSharp.fluid;
  const profilePic3: ImageSharpFluid = profile3.childImageSharp.fluid;
  const profilePic4: ImageSharpFluid = profile4.childImageSharp.fluid;

  return (
    <>
      <Styled.Images>
        <Img fluid={profilePic1} />
        <Img fluid={profilePic2} />
        <Img fluid={profilePic3} />
        <Img fluid={profilePic4} />
      </Styled.Images>
      <Styled.Details>
        <FormatHtml className="pd" content={html.node.html} />
      </Styled.Details>
    </>
  );
};

export default Pd;
