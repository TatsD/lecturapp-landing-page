module.exports = {
  siteMetadata: {
    title: `Lecturapp - UAC`,
    description: `Una aplicación para mejorar la comprension lectora de forma interactiva.`,
    author: `Tatiana davila - Aramis De Lamark`,
    siteUrl: `http://lecturapp.digital`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171276303-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
