const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: "Hi, I'm Ricardo.",
    description:
      "I'm a Frontend developer with focus on user experience and a flair for design. Always looking for something new to learn and willing to help those around me.",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u1k1mar9m88d`,
        accessToken: process.env.CONTENFUL_ACESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
}
