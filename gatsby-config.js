module.exports = {
  siteMetadata: {
    title: "Rohan Poojary",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        prefix: "_",
        // Disable dev debug mode, enabled by default
        debug: false,
      },
    },
],
};
