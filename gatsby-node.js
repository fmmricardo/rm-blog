const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.jsx')

    resolve(
      graphql(
        `
          query {
            allContentfulPost {
              edges {
                node {
                  path
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allContentfulPost.edges
        posts.forEach(({ node }, index) => {
          const path = node.path
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              previous,
              next,
            },
          })
          resolve()
        })
      })
    )
  })
}
