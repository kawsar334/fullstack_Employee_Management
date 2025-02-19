


import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProviders';
import UserRole from '../../essentialRoutes/UserRole';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';

const Navbar = () => {
  const { userRole } = UserRole();
  const { user, signOutUser } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
 const path = useLocation()
    const isActive = (path) => location.pathname === path ? 'bg-text text-white capitalize' : 'hover:text-white capitalize  transition-all duration-700   pl-2';

  return (
    <nav className={`${!isDarkMode ?"bg-white":"bg-dark text-white"} transition-all duration-500  text- p-4 sticky top-0 left-0 z-40 shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center">
       
        <Link to="/" className="text-3xl font-bold text-main ml-3 flex items-center gap-2 "><img  className='w-10 h-10' src="https://cdn.fileplanet.com/anic/iss-thumbs/naukrigulf.png" alt="" /> Noukori <span className="text-">Gulf</span></Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-lg hover:text-gray-300">Home</Link>
          <Link to="/contact" className="text-lg hover:text-gray-300">Contact</Link>
          {userRole === 'employee' && user && (
            // <Link to="/dashboard" className="text-lg hover:text-gray-300">Dashboard</Link>
            <></>
          )}
          {!user ? (
            <>
              <Link to="/login" className="text-lg bg-main px-2 rounded cursor-pointer text-white hover:text-gray-300">Login</Link>
              <Link to="/register" className="text-lg bg-main px-2 rounded cursor-pointer text-white hover:text-gray-300">Register</Link>
              
            </>
          ) : (
            <div className="flex items-center space-x-3">
         
                <Link to="/profile" className={` px-2 rounded ${isActive("/profile")}`}>profile</Link>
                {userRole === 'admin' && (
                  <Link to="/dashboard" className="text-lg bg-main px-2 rounded text-white hover:text-gray-300">Dashboard</Link>
                )}
                {userRole === 'hr' && (
                  <Link to="/dashboard" className="text-lg bg-main px-2 rounded text-white hover:text-gray-300">Dashboard</Link>
                )}
                {userRole === 'employee' && (
                  <Link to="/dashboard" className="text-lg bg-main px-2 rounded text-white hover:text-gray-300">Dashboard</Link>
                )}
                <Link to="/profile" className={`${isActive("profile")}`}>

                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 object-cover"
                  />
                </Link>
                <button onClick={signOutUser} className="text-lg hover:text-gray-300">Logout</button>
              
            </div>
          )}
        </div>

        <button className='text-text text-3xl' onClick={toggleTheme}>
          {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
        <button
        onClick={()=>setOpenMenu(!openMenu)}
          className="md:hidden text-2xl focus:outline-none">
         {!openMenu? <i className="fas fa-tasks text-green-500 mr-2"></i>:
          <i className="fas fa-xmark text-red-500 mr-2 text-3xl"></i>}

        </button>
      </div>

      {openMenu && <div className="shadow border md:hidden  rounded text-main p-5 w-full md:w-72 h-screen  sticky left-0 top-[500px] my-10 ">
        <h1 className="text-xl font-bold text-gray-700 mb-6 capitalize"> <i className="fas fa-tasks text-green-500 mr-2 hidden"></i> {user?.displayName}</h1>
        {userRole === 'admin' && (
          <div className="flex flex-col gap-4">
            {/* <Link     onClick={()=>setOpenMenu(!openMenu)} to="/dashboard" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Admin Dashboard</Link> */}
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/all-employee-list" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Employee list</Link>
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/payroll" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> User Management</Link>
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/admin/reports" className="text-lg hover:text-blue-600">
              <span className='text-text'>-</span> Reports 
            </Link>

          </div>
        )}
        {userRole === 'hr' && (
          <div className="flex flex-col gap-4 mt-6">
            {/* <Link     onClick={()=>setOpenMenu(!openMenu)} to="/dashboard" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Dashboard</Link> */}
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/employeelist" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Employee</Link>
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/analytics" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Progress</Link>
          </div>
        )}
        {userRole === 'employee' && user && (
          <div className="flex flex-col gap-4 mt-6 w-full">
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/dashboard" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Dashboard</Link>
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/payment-history" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Payment History</Link>
            <Link     onClick={()=>setOpenMenu(!openMenu)} to="/worksheet" className="text-lg hover:text-blue-600"><span className='text-text'>-</span> Worksheet</Link>
          </div>
        )}
        <div className="flex flex-col gap-4 mt-6  pt-4">
          <Link    onClick={()=>setOpenMenu(!openMenu)} to="/" className="text-lg hover:text-blue-600">Home</Link>
          <Link    onClick={()=>setOpenMenu(!openMenu)} to="/contact" className="text-lg hover:text-blue-600">Contact</Link>
        </div>


        <div className='md:hidden'>
          {!user ? (
            <div className=' flex flex-col gap-2'>
              <Link    onClick={()=>setOpenMenu(!openMenu)} to="/login" className="text-lg hover:text-gray-300">Login</Link>
              <Link    onClick={()=>setOpenMenu(!openMenu)} to="/register" className="text-lg hover:text-gray-300">Register</Link>
            </div>
          ) : (
              <div className="flex items-center space-x-3 my-2" onClick={() => setOpenMenu(!openMenu)}>
                <Link to="/profile">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 object-cover "
              />
                </Link>
              <button onClick={signOutUser} className="text-lg  hover:text-gray-300">Logout</button>
            </div>
          )}
        </div>
      </div>}
      {/*  */}
    </nav>
  );
};

export default Navbar;
