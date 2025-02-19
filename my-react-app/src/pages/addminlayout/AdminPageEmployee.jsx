

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../components/sidebar/Sidebar';
import AdminEmployeeListComponent from '../../components/admincomponents/AdminEmployeeComponent';
import { ThemeContext } from '../../context/ThemeProvider';

const AdminEmployeeList = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={`w-full   flex ${isDarkMode?"bg-dark text-white":"bg-white"}`}>
            <Sidebar/>
         <div>
            <AdminEmployeeListComponent/>
         </div>
        </div>
    );
};

export default AdminEmployeeList;
