import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './index.css'

const BlogLink = ({ path, style, text }) => {
  return (
    <div className={style}>
      <Link to={path}>{text}</Link>
    </div>
  )
}

Link.propTypes = {
  path: PropTypes.string,
  style: PropTypes.string,
  text: PropTypes.string,
}
Link.defaultProps = {
  path: null,
  text: null,
  style: null,
}

export default BlogLink
