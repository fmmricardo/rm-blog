import React from 'react'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'

import './index.css'

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
            <Card key={id}>
              <div key={path} className="cardPostPreview">
                <Link className="cardPostTitle" to={path}>
                  {title}
                </Link>
                <p className="cardPostTextPreview">{excerpt}</p>
                <p className="cardPostDate">{date}</p>
              </div>
            </Card>
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
