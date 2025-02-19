import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import Sidebar from '../../components/sidebar/Sidebar';
import EmployeeList from '../../components/hrcomponents/EmployeeLists';
import StripeCheckout from 'react-stripe-checkout';
import { ThemeContext } from '../../context/ThemeProvider';
const EmployeeListForHr = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    
    return (
        <div className={`flex ${isDarkMode ? "bg-dark" : "bg-white"}`}>
            <Sidebar />
            <EmployeeList />
        </div>
    );
};

export default EmployeeListForHr;





