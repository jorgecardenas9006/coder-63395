import React from 'react'

const BrandComponent = ({ logo, size }) => {
  return (
    <img src={logo} alt="logo" className={size} />
  )
}

export default BrandComponent