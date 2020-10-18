import React from 'react'

import { Link } from 'gatsby'
import './index.css'

const Navigation = () => {
  return (
    <nav className="navbarLinks">
      <div className="navigationItem">
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}
export default Navigation
