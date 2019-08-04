/* eslint-disable  */

import React from 'react'
import { graphql, Link } from 'gatsby'

const Template = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div>
        {previous && (
          <Link to={previous.frontmatter.path} rel="prev">
            ← Prev
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.path} rel="next">
            Next →
          </Link>
        )}
      </div>
    </div>
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
