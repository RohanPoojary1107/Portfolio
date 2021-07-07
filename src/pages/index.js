import React from "react";
import App from "../components/App";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/inter";

const Home = ({ data }) => {
  return <App data={data.site.siteMetadata} />;
};

export const query = graphql`
  query {
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

export default Home;
