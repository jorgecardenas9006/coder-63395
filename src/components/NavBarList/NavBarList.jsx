import React from 'react'
import './NavBarList.css'
import NavBarListContainer from './NavBarListContainer'


const NavBarList = () => {
  const list = [
    {
      name: 'Inicio',
      link: '/',
      current: true,
    },
    {
      name: 'Productos',
      link: '/productos',
      current: false,
    },
    {
      name: 'Categorias',
      link: '/productos',
      pages: [
        {name: 'RPG', link: '/categoria/RPG'}, 
        {name: 'Simulación', link: '/categoria/Simulación'},
        {name: 'Deportes', link: '/categoria/Deportes'},
        {name: 'Shooter', link: '/categoria/Shooter'},
      ],
      current: false,
    },
    {
      name: 'Cursos',
      link: '/cursos',
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