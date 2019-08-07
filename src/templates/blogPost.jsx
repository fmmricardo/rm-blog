/* eslint-disable  */

import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import './blogPost.css'

const Template = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <div className="blogWrapper">
        <h1 className="blogTitle">{title}</h1>
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="blogNavigation">
          <div className="previousLink">
            {previous && (
              <Link to={previous.frontmatter.path} rel="prev">
                ← Prev
              </Link>
            )}
          </div>
          <div className="homeLink">
            <Link to="/" rel="prev">
              Home
            </Link>
          </div>
          <div className="nextLink">
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                Next →
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
