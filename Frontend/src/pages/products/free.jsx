import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import free_img from "../../images/productImages/cities-free.png";
import s1 from "../../images/steps/free_steps_imgs/step-1.png";
import s2 from "../../images/steps/free_steps_imgs/step2.png";
import s3 from "../../images/steps/free_steps_imgs/step-3.png";
import s4 from "../../images/steps/free_steps_imgs/step-4.png";
import ProductsMenu from "../../components/ProductsMenu";

export default function Free() {
  const { user } = useAuth() || {};
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadClick = () => {
    if (!user) {
      alert("Please register or login first to download!");
      navigate('/login');
      return;
    }
    console.log("Download initiated for Free Edition");
  };

  return (
    <>
      {/* Main Content with fixed layout */}
      <div className="container mx-auto px-4 lg:px-8 mt-24">
        {/* Main flex container */}
        <div className="flex flex-col lg:flex-row">
          {/* Left column - Product content */}
          <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
            {/* Product header */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
              <div className="flex justify-center">
                <img
                  src={free_img}
                  alt="Free Cities Database"
                  className="w-full max-w-[250px] lg:max-w-[300px] h-auto object-contain"
                />
              </div>
              <div className="text-center lg:text-left w-full">
                <h2 className="text-xl lg:text-2xl font-semibold">Free GeoCityDatabase</h2>
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">FREE</h1>
                <p className="my-4 text-gray-700 text-sm lg:text-base">
                  Free database of worldwide cities in text format suitable for any applications requiring a comprehensive list
                  of cities and country code. It is a subset of the paid edition of GeoDataSource World Cities Database Basic,
                  Premium, Gold, Platinum, Titanium Edition.
                </p>
                <p className="text-gray-600 text-sm lg:text-base">Latest release: December, 2025</p>
                <div className="mt-6">
                  <button
                    className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-200 w-full lg:w-auto text-base font-medium"
                    onClick={handleDownloadClick}
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </div>

            {/* Content sections */}
            <section className="mt-16 lg:mt-20">
              <div className="max-w-full mx-auto">
                <section className="adv mb-8 lg:mb-12">
                  <h2 className="text-xl font-semibold mb-4 text-left">Advantages</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm lg:text-base">
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

                <section className="req mb-8 lg:mb-12">
                  <h2 className="text-xl font-semibold mb-4 text-left">Requirements</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm lg:text-base">
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

                <section className="spec mb-8 lg:mb-12">
                  <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-black w-full text-sm lg:text-base">
                      <thead>
                        <tr>
                          <th className="border px-2 lg:px-4 py-2">Field Name</th>
                          <th className="border px-2 lg:px-4 py-2">Description</th>
                          <th className="border px-2 lg:px-4 py-2">Type</th>
                          <th className="border px-2 lg:px-4 py-2">Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-2 lg:px-4 py-2">cc_fips</td>
                          <td className="border px-2 lg:px-4 py-2">
                            <b>FIPS 10-4 Primary Country Code.</b> A two alphabetic character FIPS 10-4 Primary Country Code uniquely
                            identifying a geopolitical entity (countries, dependencies, and areas of special sovereignty).
                          </td>
                          <td className="border px-2 lg:px-4 py-2">character</td>
                          <td className="border px-2 lg:px-4 py-2">2</td>
                        </tr>
                        <tr>
                          <td className="border px-2 lg:px-4 py-2">cc_iso</td>
                          <td className="border px-2 lg:px-4 py-2">
                            <b>ISO 3166 Primary Country Code.</b> A two alphabetic character ISO 3166 Primary Country Code uniquely
                            identifying a geopolitical entity (countries, dependencies, and areas of special sovereignty).
                          </td>
                          <td className="border px-2 lg:px-4 py-2">character</td>
                          <td className="border px-2 lg:px-4 py-2">5</td>
                        </tr>
                        <tr>
                          <td className="border px-2 lg:px-4 py-2">full_name_nd</td>
                          <td className="border px-2 lg:px-4 py-2">
                            <b>Feature's No Diacritics Full Name.</b> Same as the full name but the diacritics and special characters
                            are substituted with Roman characters.
                          </td>
                          <td className="border px-2 lg:px-4 py-2">character</td>
                          <td className="border px-2 lg:px-4 py-2">200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="sql mb-8 lg:mb-12">
                  <h2 className="text-xl font-semibold mb-4">SQL Statement</h2>
                  <div className="space-y-8">
                    <div className="step">
                      <img src={s1} alt="Step 1" className="w-full max-w-3xl mx-auto h-auto" />
                      <h2 className="text-base lg:text-lg mt-2 text-center">Step 1</h2>
                    </div>
                    <div className="step">
                      <img src={s2} alt="Step 2" className="w-full max-w-3xl mx-auto h-auto" />
                      <h2 className="text-base lg:text-lg mt-2 text-center">Step 2</h2>
                    </div>
                    <div className="step">
                      <img src={s3} alt="Step 3" className="w-full max-w-3xl mx-auto h-auto" />
                      <h2 className="text-base lg:text-lg mt-2 text-center">Step 3</h2>
                    </div>
                    <div className="step">
                      <img src={s4} alt="Step 4" className="w-full max-w-3xl mx-auto h-auto" />
                      <h2 className="text-base lg:text-lg mt-2 text-center">Step 4</h2>
                    </div>
                  </div>
                </section>

                <section className="license mb-8 lg:mb-12">
                  <h2 className="text-xl font-semibold mb-4">Licensing</h2>
                  <p className="text-gray-700 font-bold text-center text-sm lg:text-base">Single Server License</p>
                  <p className="text-gray-700 text-center text-sm lg:text-base">
                    All prices mentioned on this page are for "Single Server License" unless specified otherwise. "Single Server
                    License" can be used for one database server in a commercial environment with single or multiple connected
                    clients.
                  </p>
                </section>
              </div>
            </section>
          </div>

          {/* Right column - Products Menu */}
          <div className="w-full lg:w-1/6 mt-10 lg:mt-0">
            <div className="w-full lg:w-[50] lg:top-24">
              <ProductsMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}