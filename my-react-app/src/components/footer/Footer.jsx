import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "../socialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-6">
    
        <div className="grid md:grid-cols-3 gap-3 md:gap-8">
      
          <div>
            {/* <h3 className="text-2xl font-semibold mb-4">About Us</h3> */}
             {/* <NavLink to="/" className="text-3xl font-bold text-text ">Noukori <span className="text-white">Gulf</span></NavLink> */}
              <NavLink to="/" className="text-3xl font-bold text-main ml-3 flex items-center gap-2 "><img  className='w-10 h-10 rounded-full' src="https://cdn.fileplanet.com/anic/iss-thumbs/naukrigulf.png" alt="" /> Noukori <span className="text-">Gulf</span></NavLink>
            <p className="text-gray-400">
              We provide top-notch solutions to manage your employees. Our platform streamlines HR processes, ensuring efficiency and security.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#services" className="text-gray-400 hover:text-indigo-500">Services</a>
              </li>
              <li className="mb-2">
                <NavLink to="/" className="text-gray-400 hover:text-indigo-500">About</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/contact" className="text-gray-400 hover:text-indigo-500">Contact</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/register" className="text-gray-400 hover:text-indigo-500">Sign Up</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">1234 Taif, Soudi arabia, </p>
            <p className="text-gray-400 mb-2">Phone: +966509325731</p>
            <p className="text-gray-400">Email: kawsarfiroz11@gmail.com</p>
          </div>
        </div>
       

        <SocialLinks/>
      </div>
    </footer>
  );
};

export default Footer;
