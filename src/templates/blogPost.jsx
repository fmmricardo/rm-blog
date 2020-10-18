/* eslint-disable  */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogLink from '../components/BlogLink'
import 'typeface-open-sans'

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
          <BlogLink text="Back to Blog" path="/blog" />
        </div>
        <h1 className="blogTitle">{title}</h1>
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
                path={previous.frontmatter.path}
              />
            )}
          </div>
          <BlogLink style="homeLink" text="Home" path="/" />
          <div>
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
