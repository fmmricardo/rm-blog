import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const SectionTitle = ({ children }) => {
  return <div className="sectionTitle">{children}</div>
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionTitle
