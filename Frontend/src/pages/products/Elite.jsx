import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import gold_img from "../../images/productImages/cities-gold-top.png";
import ProductsMenu from "../../components/ProductsMenu";

export default function Elite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotifyMeClick = async () => {
    const email = prompt("Enter your email to be notified:");
    if (email) {
      console.log(email);
    }
  };

  return (
    <>
      <div className="container mt-24 mx-auto px-4 lg:px-8 w-full mr-10 mt-[200px]">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:w-2/3">
            <div className="flex justify-center w-full lg:w-auto">
              <img
                src={gold_img} 
                alt="Gold Edition Database"
                className="w-full max-w-[300px] h-[300px] object-contain"
              />
            </div>
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-semibold">Elite GeoCityDataBase</h2>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">$749.99</h1>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                Database of worldwide cities in text format suitable for any applications requiring a comprehensive list of city names, 
                state/province (ADM1), latitude, longitude, and country code.
              </p>
              <p className="text-gray-600 text-sm lg:text-base">Latest release: December, 2025</p>
              <p className="font-bold text-red-600 mt-4">This product is launching soon!</p>
              <button
                className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-200 w-full lg:w-auto text-base font-medium mt-4"
                onClick={handleNotifyMeClick}
              >
                Notify Me
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/3 lg:sticky lg:top-10">
          <div className="w-full lg:w-[70rem]">
              <ProductsMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
