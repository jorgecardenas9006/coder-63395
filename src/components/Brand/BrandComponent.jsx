import React from 'react'
import { Link } from 'react-router-dom'

const BrandComponent = ({ logo, size }) => {
  return (
    <img src={logo} alt="logo" className={size} />
  )
}

export default BrandComponent