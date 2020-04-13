import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Header />
      <CardList>
        {edges.map(edge => {
          const { id } = edge.node
          const { date, excerpt, path, title } = edge.node.frontmatter
          return (
            <Card
              key={id}
              path={path}
              title={title}
              excerpt={excerpt}
              date={date}
            />
          )
        })}
      </CardList>
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
            thumbnail
          }
        }
      }
    }
  }
`
export default IndexPage
