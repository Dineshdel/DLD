// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <div className="flex-shrink-0">
          
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">Settings</li>
              <Link to='/'>
              <li className="hover:text-gray-300 cursor-pointer">Logout</li>
              </Link>
            </ul>
          </nav>
          
          {/* Mobile Menu Button (Optional for responsive design) */}
          <div className="md:hidden">
            {/* You can implement a mobile menu icon here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
