import React from 'react'
import 'typeface-open-sans'
import 'typeface-lato'
import Footer from '../Footer'

import './index.css'

export default ({ children }) => (
  <div className="layout">
    {children}
    <Footer />
  </div>
)
