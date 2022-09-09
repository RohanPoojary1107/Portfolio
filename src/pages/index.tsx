import React from "react";
import App from "../components/App";
import SEO from "../components/Seo";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/inter";

const Home = () => {
  return <App />;
};

export default Home;

export const Head = ({ location }: { location: Location }) => (
  <SEO pathname={location.pathname} />
);
