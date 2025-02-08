import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import logo from '../images/logo.png'

const Navbar = () => {
  const { user, logoutUser } = useAuth() || {};
  const defaultProfilePic = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center space-x-2 pt-3.5 pb-3.5">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-44 max-md:w-28 cursor-pointer" />
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
        </div>

        <div className="lg:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center gap-2">
              <img 
                src={user.picture || defaultProfilePic} 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover"
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
  );
};

export default Navbar;
