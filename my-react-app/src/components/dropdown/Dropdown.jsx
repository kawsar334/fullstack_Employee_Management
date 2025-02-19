import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeProvider'

const Dropdown = () => {
     const { isDarkMode, toggleTheme } = useContext(ThemeContext)
     const path = useLocation()
        const isActive = (path) => location.pathname === path ? 'bg-text text- capitalize' : 'hover:text-main capitalize  transition-all duration-700   pl-2';
  return (
    <>

          <details className={`dropdown ${isDarkMode ?"bg-dark text-white":"bg-white text-dark"}`}>
              <summary className="btn btn-sm   border  bg-  ">Settings<i className="fas fa-chevron-down"></i></summary>
              <ul className={`menu dropdown-content  rounded-box z-[1] w-52 p-2 shadow my-1  ${isDarkMode?"bg-dark":"bg-white"}`}>
                  <Link to="/profile" className={`text-lg hover:text-gray-300 rounded m-1 px-1 ${isActive("/profile")}`}>Profile</Link>
                  <Link to="/contact" className={`text-lg hover:text-gray-300 rounded m-1 px-1 ${isActive("/contact")}`}>Contact</Link>
                  <Link to="/privacy" className={`text-lg hover:text-gray-300 rounded m-1 px-1 ${isActive("/privacy")}`}>privacy</Link>
                  <Link to="/help" className={`text-lg hover:text-gray-300 rounded m-1 px-1 ${isActive("/help")}`}>help</Link>
              </ul>
          </details>

    </>
  )
}

export default Dropdown