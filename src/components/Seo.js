import React from "react";
import { Helmet } from "react-helmet";
import icon from "../static/images/icon.png";

const Seo = ({
  data,
  description = "",
  lang = "en",
  meta = [],
  title,
  type = "website",
  url = "/",
  image,
  keywords,
}) => {
  const metaURL = url || "";
  const metaDescription = description || data?.description;
  const metaTitle = title || data?.title;
  const metaKeywords = keywords || data?.keywords;
  const displayImage = image || data?.image;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "author",
          content: "Rohan Poojary",
        },
        { name: "keywords", content: metaKeywords },
        { name: "og:url", content: `https://rohanpoojary.com/${metaURL}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "https://rohanpoojary.com" },
        { name: "twitter:creator", content: "@Rohan_1107" },
        { name: "twitter:author", content: "@Rohan_1107" },
        { name: "twitter:title", content: metaTitle },
        {
          name: "twitter:image",
          content: displayImage,
        },
        {
          name: "twitter:image:alt",
          content: `Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone.`,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        { property: "og:site_name", content: "Rohan Poojary's Portfolio" },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: type,
        },
        {
          property: "og:image:url",
          content: displayImage,
        },
        {
          property: "og:image:alt",
          content: `Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone.`,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={icon} />
    </Helmet>
  );
};

export default Seo;
