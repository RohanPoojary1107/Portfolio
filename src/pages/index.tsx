import React from "react";
import { Script } from "gatsby";
import App from "../components/App";
import SEO from "../components/Seo";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/inter";

const Home = () => {
  return (
    <>
      <Script src="https://app.embed.im/snow.js" />
      <App />;
    </>
  );
};

export default Home;

export const Head = ({ location }: { location: Location }) => (
  <SEO pathname={location.pathname} />
);
