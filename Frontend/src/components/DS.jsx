import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import dp1 from '../images/dp1.jpg'


class DS extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <>
           <div className="flex mt-10 justify-between font-reg mx-28 max-md:mx-4">
                <h1 className="text-3xl text-semibold max-md:text-xl">Description</h1>
                <Link to="/service-page">
                    <button className="btn max-md:hidden btn-primary shadow-sm  bg-sky-700 px-4 py-3 text-white rounded-md text-xs my-3 hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">View all services
                    </button>
                </Link>
           </div>
           <div className="flex mt-8 max-md:mt-4 max-md:mx-2 mx-28 text-left ">
            <p className="text-slate-600 tracking-wide leading-relaxed text-sm font-reg max-md:text-xs">
                At <span className="font-semibold text-sky-700">GeoCityDatabase</span>, we understand the importance of accurate and comprehensive data for your business decisions. Our data sourcing service is designed to help you access the most relevant and up-to-date information for your research and analysis needs. 
                <br />
                We offer a range of data sourcing services, including web scraping, data extraction, text mining, and more. Our team of experts have extensive experience in sourcing data from various sources, including websites, social media and other digital platforms. We use the latest technologies and tools to ensure that the data we provide is accurate, reliable and complete. 
                <br />
                Our data sourcing process includes:
                <br />
                - Defining Data Requirements: We work with you to identify you specific data needs, ensuring that our data sourcing efforts align with your business objectives.
                <br />
                - Data Collection: We source data from various sources, ensuring that data is relevant, accurate and up-to-date.
                <br />
                - Data Cleaning and Validation: We clean and validate the data to ensure that it is free from errors , inconsistencies and duplicates.
                <br />
                - Data Delivery: We deliver the data in the format of your choice, ensuring that it is easily accessible and usable.
                <br />
                At GeoCityDatabase, we are committed to providing our clients with the most comprehensive and accurate data for thier business needs. Contact us today to learn more about our data sourcing serivces.
            </p>
           </div>

           <div className="flex flex-row max-md:flex-col tracking-wide font-reg max-md:mx-2 max-md:my-4 mx-36  my-14">
            <div className="text-left max-md:mx-0 mx-20">
                <h2 className="text-lg font-medium">Key Points</h2>
                <ul className="list-disc mt-4 max-md:mt-2 max-md:text-xs text-sm text-slate-600 ">
                    <li>Comprehensive Data Sourcing</li>
                    <li className="mt-2">City Characteristic Database</li>
                    <li className="mt-2">GLobal information Services</li>
                    <li className="mt-2">Customizable output options</li>
                    <li className="mt-2">Reliable ongoing support</li>
                </ul>
            </div>
            <div className=" text-left max-md:text-left max-md:mx-2 mx-20 w-[200px] max-md:w-[160px] max-md:mt-4">
            <h2 className="text-lg font-medium">User testimonal</h2>
            <h2 className="text-base max-md:text-sm font-semibold capitalize mt-4 max-md:mt-2 text-sky-600">Jessica Simon</h2>
            <p className="text-sm max-md:text-xs text-balance text-slate-600 leading-2 max-mx:mt-2 mt-4">
                As an academic, I rely on GeoCityDatabase's comprehensive city characteristic database for my research. Thier platform is user-friendly and prodives easy access to valuable information.
            </p>
            </div>
           </div>

           <div className="flex justify-center items-center my-8">
                <div className="flex items-center w-full max-w-screen-lg mx-auto">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-2 text-gray-700  max-md:text-xs">Reviews</span>
                <div className="flex-grow border-t border-gray-600"></div>
                </div>
            </div>


            <div className="flex font-reg tracking-wide flex-row max-md:flex-col py-4 ">
                <div className="ml-28 max-md:ml-6 max-md:mr-6 mr-10">
                    <div className="flex flex-row content-center justify-center">
                    <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half-empty"/>
                    </div>
                    <p className="mt-4 max-md:text-xs  text-slate-700 text-sm text-balance">
                        GeoCityDatabase's data sourcing services have helped us gain valuable insights into our industry. Thier comprehensive city characteristics database is an excellent resource, and thier team is always helpful and responsive.
                    </p>

                    <div className="flex items-center space-x-2 max-md:space-x-1 mt-4">
                        <img className="inline-block h-10 max-md:h-6 max-md:w-6 w-10 rounded-full" src={dp1} alt="Dan_Abromov"/>
                        <span className="flex flex-col">
                        <span className="text-sm max-md:text-xs font-semibold text-gray-900 uppercase">julie robinson</span>
                        </span>
                    </div>
                </div>

                <div className="mr-24 ml-10 max-md:ml-6 max-md:mr-6 max-md:mt-4">
                <div className="flex flex-row content-center justify-center">
                    <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half-empty"/>
                    </div>
                    <p className="mt-4 max-md:text-xs text-slate-700 text-sm text-balance">
                       We rely on GeoCityDatabase's global information services to support our business decisions. THier platform provides accurate and reliable data, and thier team is always available to assist with our needs.
                    </p>

                    <div className="flex items-center space-x-2 max-md:space-x-1 mt-4">
                        <img className="inline-block h-10 w-10 max-md:h-6 max-md:w-6 rounded-full" src={dp1} alt="Dan_Abromov"/>
                        <span className="flex flex-col">
                        <span className="text-sm font-semibold max-md:text-xs text-gray-900 uppercase">james brook</span>
                        </span>
                    </div>
                </div>
            </div>
           </> 
        )
    }
}

export default DS