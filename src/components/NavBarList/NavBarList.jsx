import React from 'react'
import './NavBarList.css'
import NavBarListContainer from './NavBarListContainer'


const NavBarList = () => {
  const list = [
    {
      name: 'Inicio',
      link: '#',
      current: true,
    },
    {
      name: 'Equipo',
      link: '#',
      current: false,
    },
    {
      name: 'Proyectos',
      link: '#',
      current: false,
    },
    {
      name: 'Cursos',
      link: '#',
      current: false,
    },
  ]
  return (
    <div className="hidden sm:ml-6 sm:block force-center ">
        <div className="flex space-x-4 justify-center items-center">
            < NavBarListContainer list={list} />
        </div>
    </div>
  )
}

export default NavBarList