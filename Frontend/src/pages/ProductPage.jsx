import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import free_img from "../images/productImages/cities-free.png";
import basic_img from "../images/productImages/basic.png"
import gold_img from "../images/productImages/cities-gold-top.png"
import platinum_img from "../images/productImages/cities-platinum.png"
import premium_img from "../images/productImages/cities-premium.png"
import location_search from "../images/productImages/web-service-location-search.png"
import major_cities from "../images/productImages/major-cities.png"
import customdatabase_img from "../images/productImages/customdatabase.png"

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="py-8 mt-[100px]">
        <h1 className="text-center text-4xl font-reg font-bold max-md:text-2xl max-md:py-4 font-medium py-1 pt-9">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center mx-auto max-w-6xl px-4 py-8">
          
          {/* Product Cards with consistent sizing */}
          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={free_img} alt="Free Edition" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/free" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Free</span><br />
                <span>GeoCityDatabase</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={basic_img} alt="Basic Edition" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/essential" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Essential</span><br />
                <span>GeoCityDatabase</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={premium_img} alt="Premium Edition" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/exclusive" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Exclusive</span><br />
                <span>GeoCityDatabase</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={gold_img} alt="Gold Edition" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/elite" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Elite</span><br />
                <span>GeoCityDatabase</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={platinum_img} alt="Platinum Edition" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/ultimate" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Ultimate</span><br />
                <span>GeoCityDatabase – with utf8</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={major_cities} alt="Major Cities" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/major-cities" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Major Cities</span><br />
                <span>GeoCityDatabase – with utf8</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={location_search} alt="Cities ZIPCode" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/cities-zip-code" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>Cities ZIPCode</span><br />
                <span>Database</span>
              </p>
            </Link>
          </div>

          <div className="product_images text-center w-full max-w-[250px]">
            <div className="h-[250px] flex items-center justify-center mb-4">
              <img src={customdatabase_img} alt="VIP/Paramount Custom Made" className="w-full h-auto object-contain max-h-[250px]" />
            </div>
            <Link to="/custom" className="text-blue-500 hover:underline block">
              <p className="text-lg font-medium">
                <span>VIP/Paramount [Custom Made]</span><br />
                <span>GeoCityDatabase</span>
              </p>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductPage;

