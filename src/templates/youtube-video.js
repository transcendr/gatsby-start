import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const styles = {
  embedContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  embedContainerIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}

class YoutubeVideo extends Component {
  render() {
    const { title, videoId } = this.props.data.contentfulVideo
    const src = `https://www.youtube.com/embed/${videoId}?rel=0`
    return (
      <Layout node={this.props.data.contentfulVideo}>
        {/*<h1>{title}</h1>*/}
        <div className="embed-container" style={styles.embedContainer}>
          <iframe
            title={title}
            style={styles.embedContainerIframe}
            src={src}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
          />
        </div>
        <hr />
      </Layout>
    )
  }
}

YoutubeVideo.propTypes = {
  data: PropTypes.object.isRequired,
}
export default YoutubeVideo

export const pageQuery = graphql`
 query videoQuery($slug: String!){
   contentfulVideo(slug: {eq: $slug}) {
     id,
     slug,
     title,
     videoId
   }
 } 
`
