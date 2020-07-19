import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import IosSearch from 'react-ionicons/lib/IosSearch'

import Image from '../components/image'
import './card.css'

const dummy = [
  {id: 'product_1', title: 'ARS-FAS-01'},
  {id: 'product_2', title: 'ARS-KATE-01'},
  {id: 'product_3', title: 'ARS-SLOP-01'},
  {id: 'product_1', title: 'ARS-FAS-01'},
  {id: 'product_2', title: 'ARS-KATE-01'},
  {id: 'product_3', title: 'ARS-SLOP-01'}
]

const Card = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3 style={{display: 'inline-block', alignSelf: 'center', fontWeight: '400'}} className="sub_title">
        Katalog Produk
      </h3>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16}}>
        {
          dummy.map(item => 
            <div className="card noselect">
              <div className="card-content">
                <div className="card-header">
                  <span>36</span>
                  <span>37</span>
                  <span>38</span>
                </div>
                <Image which="null" name={item.id} />
                <div className="card-footer">
                  <span className="title">{item.title}</span>
                  <span className="search-icon">
                    <IosSearch fontSize="32px" color="#e6af2e" />
                  </span>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Card
