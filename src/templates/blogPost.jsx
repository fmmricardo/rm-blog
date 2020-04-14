/* eslint-disable  */

import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import BlogLink from '../components/BlogLink'
import './blogPost.css'

const Template = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <div className="blogWrapper">
        <div className="blogBackToHomepage">
          <BlogLink
            data-test="post-home-link"
            text="Back to Homepage"
            path="/"
          />
        </div>
        <h1 className="blogTitle" data-test="post-title">
          {title}
        </h1>
        <div
          className="blogContent"
          data-test="post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="blogNavigation">
          <div>
            {previous && (
              <BlogLink
                style="previousLink"
                text="← Prev"
                path={previous.frontmatter.path}
              />
            )}
          </div>
          <BlogLink style="homeLink" text="Home" path="/" />
          <div data-test="post-navigation-links">
            {next && (
              <BlogLink
                style="nextLink"
                text="Next →"
                path={next.frontmatter.path}
              />
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
      frontmatter {
        title
      }
      html
    }
  }
`

export default Template
