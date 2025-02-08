import React, { useEffect, useState } from "react";
// import { account } from "../../utils/appwrite";
import { Navigate } from "react-router-dom";

import  platinum_img from "../../images/productImages/cities-platinum.png"

export default function Ultimate() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   // Check if the user is logged in
  //   const checkAuthStatus = async () => {
  //     try {
  //       await account.get(); // Fetch user details
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       console.error("User is not authenticated:", error);
  //       setIsAuthenticated(false);
  //     }
  //   };
  //   checkAuthStatus();
  // }, []);

  const handleNotifyMeClick = async () => {
    const email = prompt("Enter your email to be notified:");
    if (email) {
      console.log(email);
      // try {
      //   await fetch('/api/notify-me', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email }),
      //   });
      //   alert('You will be notified when the product is launched!');
      // } catch (error) {
      //   console.error("Failed to register for notifications:", error);
      //   alert('Something went wrong. Please try again later.');
      // }
    }
  };

  // if (redirect) {
  //   return <Navigate to="/login" replace />;
  // }
  return (
    <>
      <div className="container mt-24 mx-auto px-20">
        <div className="flex items-center justify-center gap-10">
          <div className="flex justify-center">
            <img
              src={platinum_img} 
              alt="Platinum Edition Database"
              className="w-96 h-[250px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Ultimate
GeoCityDatabase – with utf8</h2>
            <h1 className="text-4xl font-bold text-blue-600">$999.99</h1>
            <p className="my-4 text-gray-700">
            Database of worldwide cities in text format suitable for any applications requiring a comprehensive list of cities name, 
            state/province (ADM1), latitude, longitude, country code. It is a subset of the GeoDataSource™ Cities Database Platinum 
            and Titanium Edition.
            </p>
            <p className="text-gray-600">Latest release: December, 2025</p>
          <br />
          <p className="font-bold text-red-600">This product is launching soon!</p>
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4"
            onClick={handleNotifyMeClick}
          >
            Notify Me
          </button>
          </div>
        </div>
      </div>

    </>
  );
}
