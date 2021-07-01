module.exports = {
  siteMetadata: {
    title: "Rohan Poojary",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohan Poojary's Portfolio`,
        short_name: `Rohan`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
],
};
