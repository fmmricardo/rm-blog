import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulPost

  return (
    <Layout>
      <Header />
      <CardList>
        {edges.map(edge => {
          const { id } = edge.node
          const { date, excerpt, path, title } = edge.node
          return (
            <Card
              data-test="card-attributes"
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
    allContentfulPost {
      edges {
        node {
          id
          path
          title
          excerpt
          date
        }
      }
    }
  }
`
export default IndexPage
