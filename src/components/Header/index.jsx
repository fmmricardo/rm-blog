import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './index.css'

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  return (
    <div className="headerWrapper">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}
export default Header
