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

  const handleNotifyMeClick = async () => {
    if (!user) {
      setRedirect(true);
      return;
    }

    const email = prompt("Enter your email to be notified:");
    if (email) {
      try {
        alert("You will be notified when the product is launched!");
      } catch (error) {
        console.error("Failed to register for notifications:", error);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* Product Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-center md:items-start gap-8">

            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={customdatabase_img}
                alt="VIP/Paramount Custom Made Database"
                className="w-full max-w-[300px] h-[300px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="text-center md:text-left w-full md:max-w-md">
              <h2 className="text-xl lg:text-2xl font-semibold">
                VIP/Paramount [Custom Made] GeoCityDatabase
              </h2>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">
                $50
              </h1>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                GeoDataSource™ VIP/Paramount [Custom Made] GeoCityDatabase is a REST API that enables users to look up cities by latitude and longitude. The result is returned in JSON or XML and includes country, region, city, coordinates, currency, sunrise/sunset times, time zone, and distance.
              </p>
              <p className="my-4 text-gray-700 text-sm lg:text-base">
                It includes two APIs: Nearest City API (single result) and Nearest Cities API (cities within 20km). The paid plan renews and recharges monthly.
              </p>
              <p className="text-gray-600 text-sm lg:text-base">
                Latest release: December, 2025
              </p>
              <p className="font-bold text-red-600 mt-4">
                This product is launching soon!
              </p>
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
    </>
  );
}
