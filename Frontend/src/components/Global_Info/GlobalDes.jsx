import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import dp1 from '../../images/dp1.jpg';

class GlobalDes extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {}
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
                    At <span className="font-semibold text-sky-700">GeoCityDatabase</span>, we offer a comprehensive Global Information Service designed to provide accurate and up-to-date insights into nations and regions worldwide. 
                    Our service is tailored for researchers, analysts, and professionals who require detailed data to support their projects and decisions.
                    <br />
                    <br />
                    We provide a wide range of global data, including economic indicators, demographics, and political information, ensuring a holistic understanding of regions and nations. 
                    Leveraging the latest technologies, we deliver reliable and actionable insights customized to your needs.
                    <br />
                    <br />
                    Our Global Information Service includes:
                    <br />
                    - <span className="font-semibold">Economic Indicators:</span> Detailed metrics on GDP, industries, employment, and market trends.
                    <br />
                    - <span className="font-semibold">Demographics:</span> Insights into population, age distribution, income levels, and education statistics.
                    <br />
                    - <span className="font-semibold">Political Environment:</span> Information on government structures, policies, and stability.
                    <br />
                    - <span className="font-semibold">Customized Data Delivery:</span> Flexible formats for seamless integration into your workflows.
                    <br />
                    <br />
                    At GeoCityDatabase, we are dedicated to empowering our clients with the most accurate and comprehensive global data available. Contact us today to learn more about how our Global Information Service can support your business and research needs.
                </p>
            </div>

            <div className="flex flex-row max-md:flex-col tracking-wide font-reg max-md:mx-2 max-md:my-4 mx-36 my-14">
                <div className="text-left max-md:mx-0 mx-20">
                    <h2 className="text-lg font-medium">Key Points</h2>
                    <ul className="list-disc mt-4 max-md:mt-2 max-md:text-xs text-sm text-slate-600">
                        <li>Comprehensive Global Insights</li>
                        <li className="mt-2">Accurate Economic, Demographic, and Political Data</li>
                        <li className="mt-2">Customizable Data Delivery Formats</li>
                        <li className="mt-2">Reliable and Up-to-Date Information</li>
                        <li className="mt-2">Expert Support and Assistance</li>
                    </ul>
                </div>
                <div className="text-left max-md:text-left max-md:mx-2 mx-20 w-[200px] max-md:w-[160px] max-md:mt-4">
                    <h2 className="text-lg font-medium">User Testimonial</h2>
                    <h2 className="text-base max-md:text-sm font-semibold capitalize mt-4 max-md:mt-2 text-sky-600">Jessica Simon</h2>
                    <p className="text-sm max-md:text-xs text-balance text-slate-600 leading-2 max-md:mt-2 mt-4">
                        GeoCityDatabase's global information service has been a game-changer for our research. Their platform is intuitive and provides access to high-quality, reliable data.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center my-8">
                <div className="flex items-center w-full max-w-screen-lg mx-auto">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="mx-2 text-gray-700 max-md:text-xs">Reviews</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>
            </div>

            <div className="flex font-reg tracking-wide flex-row max-md:flex-col py-4">
                <div className="ml-28 max-md:ml-6 max-md:mr-6 mr-10">
                    <div className="flex flex-row content-center justify-center">
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half" />
                    </div>
                    <p className="mt-4 max-md:text-xs text-slate-700 text-sm text-balance">
                        GeoCityDatabase's services are a valuable resource for our team. The global insights they provide are accurate and tailored to our needs.
                    </p>

                    <div className="flex items-center space-x-2 max-md:space-x-1 mt-4">
                        <img className="inline-block h-10 max-md:h-6 max-md:w-6 w-10 rounded-full" src={dp1} alt="User Profile" />
                        <span className="flex flex-col">
                            <span className="text-sm max-md:text-xs font-semibold text-gray-900 uppercase">Julie Robinson</span>
                        </span>
                    </div>
                </div>

                <div className="mr-24 ml-10 max-md:ml-6 max-md:mr-6 max-md:mt-4">
                    <div className="flex flex-row content-center justify-center">
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star" />
                        <img width="20" height="20" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half" />
                    </div>
                    <p className="mt-4 max-md:text-xs text-slate-700 text-sm text-balance">
                        We rely on GeoCityDatabase's insights to support our strategic decisions. Their platform is user-friendly and delivers excellent value.
                    </p>

                    <div className="flex items-center space-x-2 max-md:space-x-1 mt-4">
                        <img className="inline-block h-10 w-10 max-md:h-6 max-md:w-6 rounded-full" src={dp1} alt="User Profile" />
                        <span className="flex flex-col">
                            <span className="text-sm font-semibold max-md:text-xs text-gray-900 uppercase">James Brook</span>
                        </span>
                    </div>
                </div>
            </div>
           </> 
        )
    }
}

export default GlobalDes;
