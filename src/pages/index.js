import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const VideoPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout node={{}}>
    <ul>
      {data.allContentfulVideo.edges.map(edge => (
        <VideoPost node={edge.node} key={edge.node.id} />
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulVideo (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          id,
          title,
          slug,
          videoId
        }
      }
    }
  }
`
