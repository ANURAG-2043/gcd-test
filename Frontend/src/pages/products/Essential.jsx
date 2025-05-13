import React, { useEffect } from "react";
import basic_img from "../../images/productImages/basic.png";
import ProductsMenu from "../../components/ProductsMenu";

export default function Essential() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotifyMeClick = async () => {
    const email = prompt("Enter your email to be notified:");
    if (email) {
      console.log(email);
      // Future implementation for email notification API
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Product Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={basic_img} 
                alt="Basic Edition Database"
                className="w-full max-w-[300px] h-[300px] object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div className="text-center md:text-left w-full md:max-w-md">
              <h2 className="text-xl lg:text-2xl font-semibold">Essential GeoCityDatabase</h2>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">$249.99</h1>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                Database of worldwide cities in text format suitable for any applications requiring a comprehensive list of cities name and country code.
              </p>
              <p className="text-gray-600 text-sm lg:text-base">Latest release: December, 2025</p>
              <br />
              <p className="font-bold text-red-600">This product is launching soon!</p>
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4 w-full md:w-auto"
                onClick={handleNotifyMeClick}
              >
                Notify Me
              </button>
            </div>
          </div>
          
          {/* Products Menu Section */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <ProductsMenu />
          </div>
        </div>
      </div>

      {/* Uncomment and modify the Advantages, Requirements, Specifications sections as needed */}
    </>
  );
}