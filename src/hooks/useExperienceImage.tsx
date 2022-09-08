import { useStaticQuery, graphql } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { CompanyCode } from "../global-types";

type ExperienceImages = {
  [k in CompanyCode]: {
    childImageSharp: IGatsbyImageData;
  };
};

export const useExperienceImage = () => {
  const data: ExperienceImages = useStaticQuery(graphql`
    query {
      wattpad: file(relativePath: { eq: "wattpad.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      rbc: file(relativePath: { eq: "rbc.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      icube: file(relativePath: { eq: "icube.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      uoft: file(relativePath: { eq: "uoft.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const images: { [k in CompanyCode]: IGatsbyImageData } = {
    wattpad: getImage(data.wattpad.childImageSharp),
    rbc: getImage(data.rbc.childImageSharp),
    icube: getImage(data.icube.childImageSharp),
    uoft: getImage(data.uoft.childImageSharp),
  };

  return images;
};
