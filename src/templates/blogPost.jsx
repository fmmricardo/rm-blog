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
      <div className="wrapper">
        <h1 className="title">{title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="postNavegation">
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
