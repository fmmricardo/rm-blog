import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/lib/fa'

import './index.css'

const Footer = () => (
  <div className="footer">
    <div className="social">
      <div>
        <a href="https://twitter.com/FMMRicardo">
          <FaTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/fmmricardo">
          <FaGithub />
        </a>
      </div>
    </div>

    <div className="copyright">
      &copy; Copyright {new Date().getFullYear()} Ricardo Martins
    </div>
  </div>
)

export default Footer
