import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import icon from "../static/images/icon.png";
import cover from "../static/images/cover.png";

type SeoProps = {
  description?: string;
  lang?: string;
  title?: string;
  type?: string;
  url?: string;
  keywords?: string;
};

const Seo = ({
  description = "",
  lang = "en",
  title,
  type = "website",
  url = "/",
  keywords,
}: SeoProps) => {
  const data: Queries.SeoQuery = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
        }
      }
    }
  `);
  const siteMetadata = data?.site?.siteMetadata;

  const metaURL = url || "";
  const metaDescription = description || (siteMetadata?.description ?? "");
  const metaTitle = title || (siteMetadata?.title ?? "");
  const metaKeywords = keywords || (siteMetadata?.keywords ?? "");

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
      <meta name="twitter:image" content={cover} />
      <meta
        name="twitter:image:alt"
        content="Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone."
      />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:site_name" content="Rohan Poojary's Portfolio" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image:url" content={cover} />
      <meta
        property="og:image:alt"
        content="Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone."
      />
    </Helmet>
  );
};

export default Seo;
