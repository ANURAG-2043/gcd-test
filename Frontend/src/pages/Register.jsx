
import React, {   useEffect, useRef, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import {FaUser, FaEnvelope, FaMobile, FaLock} from 'react-icons/fa';

const Register = () => {

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  //   if(user){
  //     navigate('/')
  //   }
  // },[])
   
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      // In your handleSubmit function, update the fetch URL:
      //const response = await fetch('http://localhost:3000/api/users/register', {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/register`, {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create Account</h2>
        {error && <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-6 text-center">{error}</div>}
          <form onSubmit={handleRegister} className="mt-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your name"
                required
              />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Mobile
              </label>
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaMobile className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your mobile number"
                required
              />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your email"
                required
              />
             </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Enter your password"
                required
              />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-600 focus:border-sky-600"
                placeholder="Confirm your password"
                required
              />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </form>

        <div className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
