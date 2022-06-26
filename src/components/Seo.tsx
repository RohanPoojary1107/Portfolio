import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import icon from "../static/images/icon.png";

type SeoProps = {
  data?: Queries.SeoQuery;
  description?: string;
  lang?: string;
  title?: string;
  type?: string;
  url?: string;
  image?: string;
  keywords?: string;
};

const Seo = ({
  data,
  description = "",
  lang = "en",
  title,
  type = "website",
  url = "/",
  image,
  keywords,
}: SeoProps) => {
  const siteMetadata = data?.site?.siteMetadata;

  const metaURL = url || "";
  const metaDescription = description || (siteMetadata?.description ?? "");
  const metaTitle = title || (siteMetadata?.title ?? "");
  const metaKeywords = keywords || (siteMetadata?.keywords ?? "");
  const displayImage = image || (siteMetadata?.image ?? "");

  return (
    <Helmet htmlAttributes={{ lang }} titleTemplate={`%s`}>
      <title>{metaTitle}</title>
      <link rel="icon" href={icon} />
      <meta name="description" content={metaDescription} />
      <meta name="author" content="Rohan Poojary" />
      <meta name="keywords" content={metaKeywords} />
      <meta name="og:url" content={`https://rohanpoojary.com/${metaURL}`} />

      <meta name="twitter:site" content="https://rohanpoojary.com" />
      <meta name="twitter:creator" content="@Rohan_1107" />
      <meta name="twitter:author" content="@Rohan_1107" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:image" content={displayImage} />
      <meta
        name="twitter:image:alt"
        content="Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone."
      />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:site_name" content="Rohan Poojary's Portfolio" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image:url" content={displayImage} />
      <meta
        property="og:image:alt"
        content="Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone."
      />
    </Helmet>
  );
};

export default Seo;

export const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        image
      }
    }
  }
`;
