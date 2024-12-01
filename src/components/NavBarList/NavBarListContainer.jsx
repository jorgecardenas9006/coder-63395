import React from 'react'

const NavBarListContainer = ({ list }) => {
    return (
      <div>
        {list.map((item, index) => (
          <a
            key={index + item.name + item.link + item.current + 'nav'}
            href={item.link}
            className={
              item.current
                ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            }
          >
            {item.name}
          </a>
        ))}
      </div>
    );
  };

export default NavBarListContainer