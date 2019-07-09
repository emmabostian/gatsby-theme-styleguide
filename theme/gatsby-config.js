module.exports = options => ({
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {}
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || "docs/"
      }
    }
  ]
});
