import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import globe from "../images/globe.jpg"


class Hero extends PureComponent {

    render() {
        return (
            <div className="flex max-w-fit max-md:text-center flex-col items-center justify-center md:flex-row  ps-20 mt-8 max-md:ps-4 max-md:mt-8 pt-10">
            
            <div>
              <div className="md:w-[900px] ">
                <h1 className="inline-flex items-center text-5xl font-email font-semibold max-md:text-2xl max-md:mt-4 max-md:mx-2">
                  Comprehensive City Characteristics Database
                </h1>
                <p className="mt-8 text-sm font-reg text-gray-600 max-md:text-xs max-md:mt-4 max-md:mx-2 ">
                Our platform provides easy access to the entire city characteristics database via an online download option. This wide variety of databases contains a lot of information on many nations, regions, and their unique characteristics. Data about several cities, including feature names, latitude and longitude coordinates, and other pertinent information, is readily accessible to users. The database is an excellent resource for academics, analysts, and others looking for accurate and current information on cities worldwide because it covers such a wide range of countries and territories. Our platform makes it simple to access and use this priceless material, supporting wise judgment and smart studies in a variety of sectors.
                </p>
                <div className="mt-4 max-md:mt-2">
                  <Link to="/product-page">
                    <button
                      className="btn btn-primary shadow-sm bg-sky-700 px-4 py-3 text-white rounded-md text-xs my-3 hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black max-md:text-[10px] max-md:px-3 max-md:py-[8px]"
                    >View All Products
                    </button>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="md:h-[px] md:w-[330px] me-20 ms-8 my-14 max-md:w-[160px] max-md:me-4 max-md:ms-2 max-md:my-4 max-md:pb-2 pt-5">
              <img
                src={globe}
                alt="Laptop"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
           
        )
    }
}

export default Hero