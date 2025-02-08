import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


class City_DbDes extends PureComponent {
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
                    <button className="btn max-md:hidden btn-primary shadow-sm bg-sky-700 px-4 py-3 text-white rounded-md text-xs my-3 hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    View all services
                    </button>
                </Link>
            </div>

            <div className="flex mt-8 max-md:mt-4 max-md:mx-2 mx-28 text-left">
                <p className="text-slate-600 tracking-wide leading-relaxed text-sm font-reg max-md:text-xs">
                    At <span className="font-semibold text-sky-700">GeoCityDatabase</span>, we offer a comprehensive City Database designed to provide accurate and up-to-date information on cities worldwide. Our database is an invaluable resource for academics, analysts, researchers, and professionals who rely on precise and detailed data for their projects and decision-making processes.
                    <br />
                    <br />
                    We cover a wide range of city-related information, including demographics, geography, infrastructure, and economic data, ensuring a holistic view of urban environments. Leveraging advanced data collection techniques, we deliver reliable and actionable insights tailored to your needs.
                    <br />
                    <br />
                    Our City Database services include:
                    <br />
                    - <span className="font-semibold">City Demographics:</span> Access detailed information about population, age distribution, income levels, education, and more.
                    <br />
                    - <span className="font-semibold">Geographical Insights:</span> Obtain geographical details, including city boundaries, climate data, and transportation networks.
                    <br />
                    - <span className="font-semibold">Economic Indicators:</span> Gain insights into city-level economic performance, including GDP, industries, and employment statistics.
                    <br />
                    - <span className="font-semibold">Infrastructure Details:</span> Explore information on public utilities, healthcare, education, and urban planning data.
                    <br />
                    <br />
                    At GeoCityDatabase, we are dedicated to empowering our clients with the most accurate and detailed city information available. Contact us today to learn more about how our City Database can support your research, analysis, and decision-making needs.
                </p>
            </div>

            <div className="flex flex-row max-md:flex-col tracking-wide font-reg max-md:mx-2 max-md:my-4 mx-36 my-14">
            <div className="text-left max-md:mx-0 mx-20">
                <h2 className="text-lg font-medium">Key Points</h2>
                <ul className="list-disc mt-4 max-md:mt-2 max-md:text-xs text-sm text-slate-600">
                <li>Global City Coverage</li>
                <li className="mt-2">Accurate Demographics and Geographic Insights</li>
                <li className="mt-2">Economic and Infrastructure Data</li>
                <li className="mt-2">Customizable Output Options</li>
                <li className="mt-2">Expert Assistance and Ongoing Support</li>
                </ul>
            </div>
            <div className="text-left max-md:text-left max-md:mx-2 mx-20 w-[200px] max-md:w-[160px] max-md:mt-4">
                <h2 className="text-lg font-medium">User Testimonial</h2>
                <h2 className="text-base max-md:text-sm font-semibold capitalize mt-4 max-md:mt-2 text-sky-600">Jessica Simon</h2>
                <p className="text-sm max-md:text-xs text-balance text-slate-600 leading-2 max-md:mt-2 mt-4">
                As an academic, I rely on GeoCityDatabase's comprehensive city characteristic database for my research. Their platform is user-friendly and provides easy access to valuable information.
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
                        <img className="inline-block h-10 max-md:h-6 max-md:w-6 w-10 rounded-full" src="src/images/dp1.jpg" alt="Dan_Abromov"/>
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
                        <img className="inline-block h-10 w-10 max-md:h-6 max-md:w-6 rounded-full" src="src/images/dp1.jpg" alt="Dan_Abromov"/>
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

export default City_DbDes