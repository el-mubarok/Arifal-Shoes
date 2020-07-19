import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import IosMenu from 'react-ionicons/lib/IosMenu'
import IosArrowDropdown from 'react-ionicons/lib/IosArrowDropdown'
import Image from '../components/image'
import './header.css'
// import '../../node_modules/animate.css/animate.css'

const Header = ({ siteTitle }) => {
  return (
    <div>
      <header className="header">
        <div
          className="flex-center-between"
          style={{
            padding: `16px`,
          }}
        >
          {/* empty */}
          <p style={{ margin: 0, padding: 0 }}></p>
          
          <div style={{maxWidth: `400px`, width: `200px`}}>
            <Image />
          </div>
  
          <IosMenu fontSize="32px" />
        </div>
      </header>
      
      <div className="hero-image">
        <div style={{width: `100%`, position: 'absolute', bottom: 0, left: 0, zIndex: -1}}>
          <Image which={1} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', height: '100vh', marginLeft: '32px',}}>
          <div style={{display: 'inline-block', position: 'relative', top: -48}}>
            <p style={{color: '#282f44', fontWeight: '300', lineHeight: 0.9, fontSize: 48}}>
              Good Shoes <br />
              Better People <br />
              Great Places
            </p>
            <IosArrowDropdown fontSize="48px" color="#e6af2e" style={{margin: '0 auto', display: 'block'}} className="bouncing-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
