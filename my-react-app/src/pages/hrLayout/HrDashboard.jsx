
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import EmployeeList from '../../components/hrcomponents/EmployeeLists';
import axios from 'axios';
import { ThemeContext } from '../../context/ThemeProvider';

const HrDashboard = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const [admin, setAdmin] = useState([]);
  const [users, setUsers] = useState([]);
  const [fired, setfired] = useState([]);
  useEffect(() => {
    const users = async () => {
      try {
        const res = await axios.get("https://server-wheat-xi.vercel.app/api/user/userList", {
          withCredentials: true
        });
        console.log(res.data.data);
        setUsers(res.data.data);
        // const hrr = res.data.data.filter((item)=>item.role === "hr");
        const emp = res.data.data.filter((item) => item.isFired === true);
        console.log(emp)
        setfired(res.data.data.filter((item) => item.isFired === true))
        setAdmin(res.data.data.filter((item) => item.role === "admin"))
      } catch (err) {
        console.log(err);
      }
    }
    users();
  }, [])
  return (
    <div className={`w-full  flex ${isDarkMode ? "bg-dark " : "bg-white "}`}>

      <Sidebar />

      <div className="flex-1 h-full overflow-y-auto p-6">

        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700 ">HR Dashboard</h1>

        </header>
        <div className=''>
          {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">Dashboard Overview</h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded shadow  border text-center">
              <i className="fas fa-users text-main text-3xl mb-4"></i>
              <h3 className="text-gray-500">Total Employees</h3>
              <p className="text-2xl font-bold">{users?.length}</p>
            </div>
            <div className="bg-white p-6 rounded shadow  border text-center">
              <i className="fas fa-clipboard-list text-main text-3xl mb-4"></i>
              <h3 className="text-gray-500">Admin</h3>
              <p className="text-2xl font-bold">{admin.length}</p>
            </div>
            <div className="bg-white p-6 rounded shadow  border text-center">
              <i className="fas fa-user-check text-purple-500 text-3xl mb-4"></i>
              <h3 className="text-gray-500">Hired This Month</h3>
              <p className="text-2xl font-bold">23</p>
            </div>
          </div>

          <div className='my-10'>

            <EmployeeList />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HrDashboard;
