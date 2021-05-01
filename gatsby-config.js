module.exports = {
  siteMetadata: {
    title: 'Gatsby 3 Starter',
    siteUrl: 'https://vinceops.me',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-babel-plugin-typescript-to-proptypes',
      options: {
        disable: process.env.NODE_ENV === 'production',
      },
    },
  ],
};
