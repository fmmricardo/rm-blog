import React from 'react'
import Footer from '../Footer'

import './index.css'

export default ({ children }) => (
  <div className="layout">
    {children}
    <Footer />
  </div>
)
