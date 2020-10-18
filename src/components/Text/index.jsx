import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Text = ({ children }) => {
  return <div className="text">{children}</div>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text
