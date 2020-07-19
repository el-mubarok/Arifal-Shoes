import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Map = () => {
  return(
    <div>
      <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d988.9677614722863!2d112.4297912!3d-7.479489200000004!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1595120334426!5m2!1sid!2sid" style="width: 100%; height: 600px;" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'}} />
    </div>
  )
}

export default Map