import React from 'react'
import './NavBarButton.css'
import NavbarButtonContainer from './NavbarButtonContainer'

const NavBarButton = () => {
  const buttons = [
    {
        title: 'ingresar',
        link: '/ingresar'
    },
    {
        title: 'salir',
        link: '/salir'
    }
  ]
  return (
   <NavbarButtonContainer buttons={buttons} />
  )
}

export default NavBarButton