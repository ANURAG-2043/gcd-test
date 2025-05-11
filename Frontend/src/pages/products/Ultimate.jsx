import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import platinum_img from "../../images/productImages/cities-platinum.png";
import ProductsMenu from "../../components/ProductsMenu";

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
      <div className="container mt-24 mx-auto px-4 lg:px-8 w-full mr-10 mt-[200px] ">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:w-3/4">
            <div className="flex justify-center w-full lg:w-auto">
              <img
                src={platinum_img} 
                alt="Platinum Edition Database"
                className="w-full max-w-[300px] h-[300px] object-contain"
              />
            </div>
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-semibold">Ultimate GeoCityDatabase – with utf8</h2>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">$999.99</h1>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                Database of worldwide cities in text format suitable for any applications requiring a comprehensive list of cities name, 
                state/province (ADM1), latitude, longitude, country code.
              </p>
              <p className="text-gray-600 text-sm lg:text-base">Latest release: December, 2025</p>
              <br />
              <p className="font-bold text-red-600">This product is launching soon!</p>
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4 w-full lg:w-auto"
                onClick={handleNotifyMeClick}
              >
                Notify Me
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/3 lg:sticky">
          <div className="w-full lg:w-[70rem]">
              <ProductsMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
