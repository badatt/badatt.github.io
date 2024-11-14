import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import {SectionTitle} from "../../helpers/definitions";
import {calculateExperience} from "../../helpers/utils";

type Meta =
  | {
      name: string;
      content: any;
    }
  | {
      property: string;
      content: any;
    };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

interface MetaBanner extends SectionTitle {
  summary: string;
  linkTo: string;
  linkText: string;
  dataOfJoining: string;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { site, markdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
        markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
          frontmatter {
            title
            subtitle
            summary
            linkTo
            linkText
            dataOfJoining
          }
        }
      }
    `
  );

  const metaBanner: MetaBanner = markdownRemark.frontmatter;
  metaBanner.summary = metaBanner.summary.replace("{{experience}}", `${calculateExperience(metaBanner.dataOfJoining)}`)

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaBanner.summary
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaBanner.summary
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaBanner.summary
        }
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [] as Meta[],
  description: ``
};

export default SEO;
