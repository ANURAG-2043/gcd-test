import React, { PureComponent } from 'react';
import city from '../images/city.jpg';

class Features extends PureComponent {
    render() {
        return (
            <><div className="flex flex-col justify-center items-center text-center my-5 max-md:my-5 mt-9 ">
            <div className="flex items-center w-full max-w-screen-lg max-md:max-w-screen-sm mx-auto">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="mx-2 text-gray-700 uppercase max-md:text-xs">Additional</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
          
            <div className="flex flex-row justify-center items-center text-start font-reg max-md:flex-col mt-9 mb-9">
              {/* First Box */}
              <div className="w-[350px] max-md:w-[160px] max-md:ml-6 border mx-6">
                <div className="p-4 max-md:p-2">
                  <div className="text-gray-600 text-start text-sm mt-4 max-md:mt-2 max-md:text-xs">
                    <ul className="list-disc leading-6 list-outside">
                      <li>Continent wise</li>
                      <li>Major location under city</li>
                      <li>Major Airports, Railway stations</li>
                      <li>Alternate names – utf8</li>
                      <li>etc</li>
                    </ul>
                  </div>
                </div>
              </div>
          
              {/* Second Box */}
              <div className="w-[350px] max-md:w-[160px] max-md:ml-6 border mx-6">
                <div className="p-4 max-md:p-3">
                  <img src={city} alt="Laptop" className="h-[200px] w-full rounded-md object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full h-full max-w-screen-lg max-md:max-w-screen-sm mx-auto">
            <span className="mx-2 text-gray-700 uppercase text-center max-md:text-xs">
                <u><b>Signup free to get free databases</b></u>
            </span>
          </div>
¯
          
            </>
        )
    }
}

export default Features