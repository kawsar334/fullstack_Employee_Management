

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProgressComponent from '../../components/hrcomponents/Progress';
import Sidebar from '../../components/sidebar/Sidebar';
import { ThemeContext } from '../../context/ThemeProvider';

const Progress = () => {
      const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  
    return (
        <div className={`flex justify-start items-start ${isDarkMode?"bg-dark text-white":"bg-white text-dark"}`}>
        <Sidebar/>
        <ProgressComponent/>
        </div>
    );
};

export default Progress;
