

import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';
import UserRole from '../../essentialRoutes/UserRole';
import axios from 'axios';
import { ThemeContext } from '../../context/ThemeProvider';

const Sidebar = () => {
     const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState([]);
    const { user } = useContext(AuthContext);
    const { userRole } = UserRole();
    const path = useLocation()
    const isActive = (path) => location.pathname === path ? 'bg-text text-white' : 'hover:text-white hover:bg-text transition-all duration-700   p-2';
    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const response = await axios.get('https://server-wheat-xi.vercel.app/api/auth/jwt', {
                    withCredentials: true,
                });
                setUserId(response.data?.user.id);
            } catch (err) {
                console.error('Error fetching user role:', err);
            }
        };
        fetchUserRole();
    }, []);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get("https://server-wheat-xi.vercel.app/api/message/messages", { withCredentials: true });
                setMessage(response.data);
            } catch (error) {
                console.error("Error fetching reports:", error);
            }
        };
        fetchReports();
    }, []);

    return (
        <div className={`py-5 ${isDarkMode ? "bg-white text-main" :"bg-main text-white"}  p- w-full md:w-72 h-screen shadow-lg sticky left-0 top-0  hidden md:flex flex-col`}>
            <h1 className="text-xl font-bold text-text mb-6 capitalize"> <i className="fas fa-tasks pl-3 text-text mr-2"></i> {user?.displayName}</h1>
            {userRole === 'admin' && (
                <div className="flex  flex-col gap-2">
                    <Link to="/dashboard" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/dashboard")}`}><span className='text-text'>-</span> Admin Dashboard</Link>
                    <Link to="/all-employee-list" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/all-employee-list")}`}><span className='text-text'>-</span> Employee list</Link>
                    <Link to="/payroll" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/payroll")}`}><span className='text-text'>-</span> User Management</Link>
                    <Link to="/admin/reports" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/admin/reports")}`}>
                        <span className='text-text'>-</span> Reports <span className="text-red-500">{message.length}</span>
                    </Link>

                </div>
            )}
            {userRole === 'hr' && (
                <div className="flex flex-col gap-4 mt-6">
                    <Link to="/dashboard" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/dashboard")}`}><span className='text-text'>-</span> Dashboard</Link>
                    <Link to="/employeelist" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/employeelist")}`}><span className='text-text'>-</span> Employee</Link>
                    <Link to="/analytics" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/analytics")}`}><span className='text-text'>-</span> Progress</Link>
                </div>
            )}
            {userRole === 'employee' && user && (
                <div className="flex flex-col gap-4 mt-6 w-full">
                    <Link to="/dashboard" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/dashboard")}`}><span className='text-text'>-</span> Dashboard</Link>
                    <Link to="/payment-history" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/payment-history")}`}><span className='text-text'>-</span> Payment History</Link>
                    <Link to="/worksheet" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/worksheet")}`}><span className='text-text'>-</span> Worksheet</Link>
                </div>
            )}
            <div className="flex flex-col gap-4 mt-6 border-t pt-4">
                <Link to="/" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/")}`}>Home</Link>
                <Link to="/contact" className={`text-lg hover:text-white hover:bg-text transition-all duration-700   p-2 ${isActive("/contact")}`}>Contact</Link>
            </div>
        </div>
    );
};

export default Sidebar;
