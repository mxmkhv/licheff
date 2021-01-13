module.exports = {
  siteMetadata: {
    title: `Todor Lichev`,
    description: `Portfolio site of Todor Lichev`,
    author: `Maxim Kehayov`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: 'images',
      options: {
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: 'projects',
      options: {
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:300, 500, 600', 'Merriweather:300']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Todor Lichev portfolio`,
        short_name: `Todor Lichev portfolio`,
        start_url: `/`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
