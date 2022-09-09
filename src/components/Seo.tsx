import React from "react";

import icon from "../static/icon_512x512.png";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type SeoProps = {
  description?: string;
  title?: string;
  pathname?: string;
};

const SEO = ({ description, title, pathname }: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image,
    keywords,
    author,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername: "@Rohan_1107",
    keywords,
    author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" href={icon} />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image:alt" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.description} />
    </>
  );
};

export default SEO;
