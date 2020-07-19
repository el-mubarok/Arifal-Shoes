import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const AlphaMessage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e6af2e', padding: '16px 24px', marginBottom: '32px'}}>
      <div>
        <p style={{padding: 0, margin: 0, fontSize: '24px', color: '#282f44', fontWeight: '300'}}>Web kami saat ini masih dalam versi <span style={{fontWeight: '400'}}>Alpha</span></p>
        <p style={{padding: 0, margin: 0, color: '#282f44', fontWeight: '300'}}>Kami sangat terbuka akan saran dan masukan anda.</p>
      </div>
      <button style={{border: 'none', backgroundColor: '#e6af2e', padding: '16px 14px', color: '#ececec', cursor: 'pointer'}}>Kirim Saran &amp; Masukan</button>
    </div>
  )
}

export default AlphaMessage
