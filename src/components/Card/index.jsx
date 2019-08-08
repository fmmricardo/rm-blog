import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './index.css'

const Card = ({ path, excerpt, title, date }) => {
  return (
    <div className="card">
      <div className="cardPostPreview">
        <Link className="cardPostTitle" to={path}>
          {title}
        </Link>
        <p className="cardPostTextPreview">{excerpt}</p>
        <p className="cardPostDate">{date}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Card
