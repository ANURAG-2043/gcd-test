import React, { useEffect, useState } from "react";
// import { account } from "../../utils/appwrite";
import { Navigate } from "react-router-dom";

import  premium_img from "../../images/productImages/cities-premium.png"
// import s1 from "../../images/steps/free_steps_imgs/step-1.png";
// import s2 from "../../images/steps/free_steps_imgs/step2.png";
// import s3 from "../../images/steps/free_steps_imgs/step-3.png";
// import s4 from "../../images/steps/free_steps_imgs/step-4.png";

export default function Exclusive() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   // Check if the user is logged in
  //   const checkAuthStatus = async () => {
  //     try {
  //       await account.get(); // Fetch user details
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       console.error("User is not authenticated:", error);
  //       setIsAuthenticated(false);
  //     }
  //   };
  //   checkAuthStatus();
  // }, []);

  const handleNotifyMeClick = async () => {
    const email = prompt("Enter your email to be notified:");
    if (email) {
      console.log(email);
      // try {
      //   await fetch('/api/notify-me', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email }),
      //   });
      //   alert('You will be notified when the product is launched!');
      // } catch (error) {
      //   console.error("Failed to register for notifications:", error);
      //   alert('Something went wrong. Please try again later.');
      // }
    }
  };

  // if (redirect) {
  //   return <Navigate to="/login" replace />;
  // }
  return (
    <>
      <div className="container mt-24 mx-auto px-20">
        <div className="flex items-center justify-center gap-10">
          <div className="flex justify-center">
            <img
              src={premium_img} 
              alt="premium Edition Database"
              className="w-96 h-[250px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Exclusive GeoCityDatabase</h2>
            <h1 className="text-4xl font-bold text-blue-600">$499.99</h1>
            <p className="my-4 text-gray-700">
            Database of worldwide cities in text format suitable for any applications requiring a comprehensive 
            list of cities name, state/province (ADM1), country code. It is a subset of the GeoDataSource™ Cities 
            Database Gold, Platinum and Titanium Edition.
            </p>
            <p className="text-gray-600">Latest release: December, 2025</p>
          <br />
          <p className="font-bold text-red-600">This product is launching soon!</p>
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4"
            onClick={handleNotifyMeClick}
          >
            Notify Me
          </button>
          </div>
        </div>
      </div>

      {/* <section className="mt-20 px-8">
        <div className="max-w-7xl mx-auto">
            <section className="adv mb-12 ">
            <h2 className="text-xl font-semibold mb-4 ml-[280px]">Advantages</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mx-auto max-w-3xl">
                <li>Free and Updated Monthly</li>
                <li>Multiple Subscription Packages Available</li>
                <li>Most Accurate and Up-to-Date Source of Data</li>
                <li>Comprehensive List of Cities and Related Items (2,954,498 Entries)</li>
                <li>Support Worldwide 260+ Countries, Territories, and Sovereign Lands</li>
                <li>Instant Download Upon Subscription</li>
                <li>Free Customer Support</li>
                <li>Many Happy Customers</li>
            </ul>
            </section>

            <section className="req mb-12 ">
            <h2 className="text-xl font-semibold mb-4 ml-[280px]">Requirements</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mx-auto max-w-3xl">
                <li>Internet connection capable of downloading 11.51 MB compressed ZIP data file</li>
                <li>11.51 MB free disk space for compressed file</li>
                <li>46.05 MB free disk space for uncompressed data files</li>
                <li>WinZIP or other similar archive extraction utility</li>
                <li>
                SQL Server, Oracle, MySQL, PostgreSQL, or other database software capable of importing 2,954,498 records
                from a standard tab-delimited ASCII text file and sufficient disk space to import the database
                </li>
            </ul>
            </section>

            <section className="spec mb-12 text-center">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <table className="table-auto border-collapse border border-black w-full mx-auto max-w-4xl">
                <thead>
                <tr>
                    <th className="border px-4 py-2">Field Name</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Type</th>
                    <th className="border px-4 py-2">Length</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border px-4 py-2">cc_fips</td>
                    <td className="border px-4 py-2">
                    <b>FIPS 10-4 Primary Country Code.</b> A two alphabetic character FIPS 10-4 Primary Country Code uniquely
                    identifying a geopolitical entity (countries, dependencies, and areas of special sovereignty).
                    </td>
                    <td className="border px-4 py-2">character</td>
                    <td className="border px-4 py-2">2</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">cc_iso</td>
                    <td className="border px-4 py-2">
                    <b>ISO 3166 Primary Country Code.</b> A two alphabetic character ISO 3166 Primary Country Code uniquely
                    identifying a geopolitical entity (countries, dependencies, and areas of special sovereignty).
                    </td>
                    <td className="border px-4 py-2">character</td>
                    <td className="border px-4 py-2">5</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">full_name_nd</td>
                    <td className="border px-4 py-2">
                    <b>Feature's No Diacritics Full Name.</b> Same as the full name but the diacritics and special characters
                    are substituted with Roman characters.
                    </td>
                    <td className="border px-4 py-2">character</td>
                    <td className="border px-4 py-2">200</td>
                </tr>
                </tbody>
            </table>
            </section>

        </div>
        </section>

        <section className="sql mb-12">
          <h2 className="text-xl font-semibold mb-4 text-center">SQL Statement</h2>
          <div className="step mb-6">
            <img src={s1} alt="Step 1" className="w-3/4 mx-auto h-auto" />
            <h2 className="text-lg mt-2 text-center">Step 1</h2>
          </div>
          <div className="step mb-6">
            <img src={s2} alt="Step 2" className="w-3/4 mx-auto h-auto" />
            <h2 className="text-lg mt-2 text-center">Step 2</h2>
          </div>
          <div className="step mb-6">
            <img src={s3} alt="Step 3" className="w-3/4 mx-auto h-auto" />
            <h2 className="text-lg mt-2 text-center">Step 3</h2>
          </div>
          <div className="step mb-6">
            <img src={s4} alt="Step 4" className="w-3/4 mx-auto h-auto" />
            <h2 className="text-lg mt-2 text-center">Step 4</h2>
          </div>
        </section>

        <section className="license mb-12 px-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Licensing</h2>
            <p className="lic_head text-gray-700 font-bold">Single Server License</p>
            <p className="text-gray-700 px-20">
                All prices mentioned on this page are for "Single Server License" unless specified otherwise. "Single Server
                License" can be used for one database server in a commercial environment with single or multiple connected
                clients.
            </p>
        </section> */}

    </>
  );
}
