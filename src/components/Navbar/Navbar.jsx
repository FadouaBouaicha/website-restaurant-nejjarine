import React, { useState } from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#services",
  },

];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state on click
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Restaurant Nejjarine
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-blue-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Menu button with click handler */}
              <button
                className="bg-gradient-to-r from-blue-800 to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                onClick={handleMenuClick}
              >
                <Link to='/products' >Menu</Link>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the dropdown menu */}
      {isMenuOpen && (
        <div className="dropdown-menu absolute right-0 top-full mt-2 bg-white shadow-md dark:bg-gray-800 dark:text-white z-50">
          <ul>
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
 



