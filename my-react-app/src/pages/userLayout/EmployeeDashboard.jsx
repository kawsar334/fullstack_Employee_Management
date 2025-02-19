


import React, { useContext } from 'react';
import PaymentHistory from './PaymentHistory';
import WorkSheet from './EmployeeWorkSheet';
import Sidebar from '../../components/sidebar/Sidebar';
import { ThemeContext } from '../../context/ThemeProvider';

const EmployeeDashboard = () => {

   const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen flex  ${isDarkMode?"bg-dark text-white":"bg-white text-dark"}`}>
     
    <WorkSheet/>
      
    </div>
  );
};

export default EmployeeDashboard;
