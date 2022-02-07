module.exports = {
  siteMetadata: {
    title: "Rohan Poojary's Portfolio",
    description: `Hey, I'm Rohan! I'm passionate about making the web more accessible and I enjoy pushing myself outside my comfort zone.`,
    siteUrl: `https://www.rohanpoojary.com`,
    author: `@Rohan_1107`,
    image: `https://rohanpoojary.com/img/cover.png`,
    keywords: `Rohan Poojary, intern, software engineer, software developer, rohan poojary resume, rohan poojary portfolio, computer science student, student, University of Toronto, Wattpad Intern, RBC intern, University of Toronto - Mississauga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/static`,
        name: 'pdf'
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohan Poojary's Portfolio`,
        short_name: `Rohan`,
        description: `Rohan Poojary's Portfolio`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        }
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rohanpoojary.com',
        sitemap: 'https://www.rohanpoojary.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158816449-1",
        head: true,
        enableWebVitalsTracking: true
      },
    },
],
};
