import React from 'react'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'

import './index.css'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={frontmatter.path} className="cardWrapper">
            <Link className="link" to={frontmatter.path}>
              {frontmatter.title}
            </Link>
            <p>{frontmatter.excerpt}</p>
            <p>{frontmatter.date}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
export default IndexPage
