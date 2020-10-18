import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Subtitle = ({ children }) => {
  return <div className="sectionSubtitle">{children}</div>
}

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Subtitle
