const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const YoutubeVideoTemplate = path.resolve('src/templates/youtube-video.js')
    resolve(
      graphql(`
        {
          allContentfulVideo (limit: 100) {
            edges {
              node {
                id,
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log('ERROR', result.errors)
          reject(result.errors)
        } else {
          console.log('SUCCESS', result)
        }

        result.data.allContentfulVideo.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: YoutubeVideoTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
