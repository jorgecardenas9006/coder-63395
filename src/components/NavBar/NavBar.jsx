import React from 'react'
import Brand from '../Brand/Brand'
import NavBarList from '../NavBarList/NavBarList'
import NavBarButton from '../NavBarButton/NavBarButton'
import CartWidget from '../CartWidget/CartWidget'
import NavBarProfile from '../NavBarProfile/NavBarProfile'

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="relative flex h-28 items-center">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Brand />
            <NavBarList />
          </div>
          <NavBarButton />
          <CartWidget />
          <NavBarProfile />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
