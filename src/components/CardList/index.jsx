import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const CardList = ({ children }) => {
  return <ul className="cardList">{children}</ul>
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
}
export default CardList
