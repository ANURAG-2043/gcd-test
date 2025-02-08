import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
// import computer from "../images/computer.jpg";
// import map from '../images/map.jpg';
import free_img from "../images/productImages/cities-free.png";
import basic_img from "../images/productImages/basic.png"
import gold_img from "../images/productImages/cities-gold-top.png"
import platinum_img from "../images/productImages/cities-platinum.png"
import premium_img from "../images/productImages/cities-premium.png"
import location_search from "../images/productImages/web-service-location-search.png"
import major_cities from "../images/productImages/major-cities.png"
import customdatabase_img from "../images/productImages/customdatabase.png"


class Products extends PureComponent {
    render() {
        return (
          <>
          <h1 className="text-center text-4xl font-reg max-md:text-2xl max-md:py-4 font-medium py-1 pt-9">
            Our Products
          </h1>
          <div className="grid grid-cols-4 gap-8 place-items-center mx-auto max-w-5xl">
                    <div className="product_images text-center">
                      <img src={free_img} alt="Free Edition" className="w-[180px] h-[210px] "
                      />
                      <Link to="/free" className="text-blue-500 hover:underline mt-2 block">
                        <p>
                          <span>Free</span><br />
                          <span>GeoCityDatabase</span>
                        </p>
                      </Link>
                    </div>
                    <div className="product_images text-center">
                      <img src={basic_img} alt="Basic Edition" className="w-[180px] h-[210px]"
                      />
                        <Link to="/essential" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>Essential</span><br />
                            <span>GeoCityDatabase</span>
                          </p>
                        </Link>
                      </div>
                      <div className="product_images text-center">
                        <img src={premium_img} alt="Premium Edition" className="w-[180px] h-[210px]" />
                        <Link to="/exclusive" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>Exclusive</span><br />
                            <span>GeoCityDatabase</span>
                          </p>
                        </Link>
                      </div>
                      <div className="product_images text-center">
                        <img src={gold_img} alt="Gold Edition" className="w-[180px] h-[210px]" />
                        <Link to="/elite" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>Elite</span><br />
                            <span>GeoCityDatabase</span>
                          </p>
                        </Link>
                      </div>
                      <div className="product_images text-center">
                        <img src={platinum_img} alt="Platinum Edition" className="w-[180px] h-[210px]" />
                        <Link to="/ultimate" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>Ultimate</span><br />
                            <span>GeoCityDatabase – with utf8 </span>
                          </p>
                        </Link>
                      </div>
                      <div className="product_images text-center">
                        <img src={major_cities} alt="Titanium Edition" className="w-[180px] h-[210px]" />
                        <Link to="/major-cities" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>Major Cities</span><br />
                            <span>GeoCityDatabase – with utf8</span>
                          </p>
                        </Link>
                      </div>
                      <div className="product_images text-center">
                        <img
                          src={location_search} alt="Major Cities"
                          className="w-[180px] h-[210px]"
                        />
                         <Link to="/cities-zip-code" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>Cities ZIPCode</span><br />
                            <span>Database</span>
                          </p>
                        </Link>
                      </div>
                      <div className="product_images text-center">
                        <img
                          src={customdatabase_img} alt="VIP/Paramount [Custom Made]
          GeoCityDatabase"
                          className="w-[180px] h-[210px]"
                        />
                        <Link to="/custom" className="text-blue-500 hover:underline mt-2 block">
                          <p>
                            <span>VIP/Paramount [Custom Made]</span><br />
                            <span>GeoCityDatabase</span>
                          </p>
                        </Link>
                      </div>
                    </div>
          </> 
        )
    }
}

export default Products