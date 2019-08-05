import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class CardList extends Component {
  render() {
    return <ul className="cardList">{this.props.children}</ul>
  }
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
}
