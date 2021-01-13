module.exports = {
  siteMetadata: {
    title: `Rodrigo Goes Blog`,
    position: `Mago das Milhas`,
    description: `Compartilhamento de conteúdo de milhas, viagens, promoções, cartões de crédito e salas vips`,
    author: `@goesrodrigo`,
    siteUrl: `http://rodrigogoesblog.com.br` 
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    
    //PRECISA SER A PRIMEIRA PARA FUNCIONAR COM GATSBY-REMARK-IMAGES
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              showCaptions: true,
            },      
          },
            'gatsby-remark-lazy-load',             
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rodrigo Goes`,
        short_name: `Rodrigo Goes`,
        start_url: `/`,
        background_color: `#1c2c3d`,
        theme_color: `#1c2c3d`,
        display: `minimal-ui`,
        icon: `src/images/goesIcon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}