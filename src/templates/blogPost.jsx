/* eslint-disable  */

import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import BlogLink from '../components/BlogLink'
import Img from 'gatsby-image'

import './blogPost.css'

const Template = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { contentfulPost } = data
  const { image } = contentfulAsset.edges.node.fluid
  const { title } = contentfulPost.title
  const { html } = contentfulPost.content.childContentfulRichText
  return (
    <Layout>
      <div className="blogWrapper">
        <div className="blogBackToHomepage">
          <BlogLink text="Back to Homepage" path="/" />
        </div>
        <h1 className="blogTitle">{title}</h1>
        <Img fluid={image} />
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="blogNavigation">
          <div>
            {previous && (
              <BlogLink
                style="previousLink"
                text="← Prev"
                path={previous.path}
              />
            )}
          </div>
          <BlogLink style="homeLink" text="Home" path="/" />
          <div>
            {next && (
              <BlogLink style="nextLink" text="Next →" path={next.path} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    contentfulPost(path: { eq: $pathSlug }) {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
  query MyAssets {
    contentfulAsset {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`

export default Template
