import React from "react";
import App from "../components/App";
import SEO from "../components/SEO";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/inter";

const NotFound404 = () => {
  return <App isInvalid />;
};

export default NotFound404;

export const Head = () => (
  <SEO title="Rohan Poojary - 404" description="Oops! Page not Found :(" />
);
