import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import logo from '../images/logo.png';

const Navbar = () => {
  const { user, logoutUser } = useAuth() || {};
  const defaultProfile = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

  return (
    <div className="mb-20">
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo"  className="w-64 h-17 max-md:w-36 max-md:h-16 cursor-pointer transform hover:scale-105 transition-transform duration-200 object-contain -mt-20 -mb-24" />
          </Link>
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <Link to="/product-page" className="text-sm text-gray-800 hover:text-gray-900">
            Products
          </Link>
          <Link to="/about-us" className="text-sm text-gray-800 hover:text-gray-900">
            About Us
          </Link>
          <Link to="/free-support" className="text-sm text-gray-800 hover:text-gray-900">
            Free Support
          </Link>
          <Link to="/contact-us" className="text-sm text-gray-800 hover:text-gray-900">
            Contact
          </Link>
          {user && (
            <Link to="/my-account" className="text-sm text-gray-800 hover:text-gray-900">
              My Account
            </Link>
          )}
        </div>

        <div className="lg:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center gap-2">
              <img 
                src={defaultProfile} 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover bg-gray-100"
              />
              <span className="text-gray-700">Hello, {user.name}</span>
              <button
                onClick={logoutUser}
                className="rounded-md bg-red-500 px-5 py-2 text-xs text-white shadow-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="rounded-md bg-indigo-500 px-5 py-2 text-xs text-white shadow-sm hover:bg-indigo-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
