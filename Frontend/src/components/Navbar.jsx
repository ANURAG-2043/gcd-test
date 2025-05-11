import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import logo from '../images/logo.png';

const Navbar = () => {
  const { user, logoutUser } = useAuth() || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const defaultProfile = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

  return (
    <div className="mb-[150px]">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-68 h-36 max-md:w-48 max-md:h-24 cursor-pointer object-contain pt-2 scale-150" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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
            <Link to="/my-account" className="text-sm text-gray-800 hover:text-gray-900">
              My Account
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4">
            {/* Login/User Profile */}
            <div className="flex items-center">
              {user ? (
                <div className="flex items-center gap-2">
                  <img 
                    src={defaultProfile} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover bg-gray-100"
                  />
                  <span className="text-gray-700 hidden sm:inline">Hello, {user.name}</span>
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

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link 
              to="/product-page" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Products
            </Link>
            <Link 
              to="/about-us" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link 
              to="/free-support" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Free Support
            </Link>
            <Link 
              to="/contact-us" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>
            <Link 
              to="/my-account" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              My Account
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
