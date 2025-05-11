import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import customdatabase_img from "../../images/productImages/customdatabase.png";
import ProductsMenu from "../../components/ProductsMenu";
import { useAuth } from "../../utils/AuthContext";

export default function Custom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { user } = useAuth() || {};
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotifyMeClick = async () => {
    if (!user) {
      setRedirect(true);
      return;
    }

    const email = prompt("Enter your email to be notified:");
    if (email) {
      try {
        alert('You will be notified when the product is launched!');
      } catch (error) {
        console.error("Failed to register for notifications:", error);
        alert('Something went wrong. Please try again later.');
      }
    }
  };

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <div className="container mt-24 mx-auto px-4 lg:px-8 w-full mr-10 mt-[200px]">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:w-3/4">
            <div className="flex justify-center w-full lg:w-auto">
              <img
                src={customdatabase_img} 
                alt="VIP/Paramount Custom Made Database"
                className="w-full max-w-[300px] h-[300px] object-contain"
              />
            </div>
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-semibold">VIP/Paramount [Custom Made] GeoCityDatabase</h2>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">$50</h1>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                GeoDataSource™ VIP/Paramount [Custom Made] GeoCityDatabase is a REST API enable user to lookup for city 
                name by using latitude and longitude coordinate. It will return the result in either JSON or 
                XML containing the information of the nearest country, region, city, latitude, longitude, 
                currency code, currency name, currency symbol, time of sunrise, time of sunset, time zone
                and distance of input coordinate with the city.
              </p>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                The GeoDataSource™ VIP/Paramount [Custom Made] GeoCityDatabase consists of two APIs, Nearest City API and Nearest
                Cities API. Nearest City API will only return one result whereas the Nearest Cities API will 
                return the list of cities within 20km. Paid plan of this Web Service will be auto-renewed and 
                auto-recharged monthly.
              </p>
              <p className="text-gray-600 text-sm lg:text-base">Latest release: December, 2025</p>
              <p className="font-bold text-red-600 mt-4">This product is launching soon!</p>
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4 w-full lg:w-auto"
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
