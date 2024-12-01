import React from 'react'

const NavbarButtonContainer = ({ buttons }) => {
    return (
        <div>
            {buttons.map((button, index) => (
                <button key={index} className="nav-bar-buttons m-1 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <a href={button.link}>{button.title}</a>
                </button>
            ))}
        </div>
    )
}

export default NavbarButtonContainer