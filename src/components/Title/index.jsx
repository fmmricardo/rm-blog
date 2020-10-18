import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Title = ({ children }) => {
  return <div className="title">{children}</div>
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
