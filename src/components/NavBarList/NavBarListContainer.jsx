import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBarListContainer = ({ list }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {list.map((item, index) => (
        <div key={index} className="relative inline-block text-left">
          <NavLink
            to={item.link}
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            id="dropdownHoverButton"
            onClick={() => toggleDropdown(index)} // Controla el estado
          >
            {item.name}
          </NavLink>

          {item.pages && (
            <div
              className={`absolute z-10 ${
                openIndex === index ? 'block' : 'hidden'
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {item.pages.map((page, idx) => (
                  <li key={idx}>
                    <a
                      href={page.link}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBarListContainer;
