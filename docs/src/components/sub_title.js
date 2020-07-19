import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import './sub_title.css'

const SubTitle = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h3 style={{display: 'inline-block', alignSelf: 'center', fontWeight: '400'}} className="sub_title">
        WorkShop Kami
      </h3>
    </div>
  )
}

export default SubTitle
