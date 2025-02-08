import React, {useEffect} from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6 lg:px-16 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-800">About Us</h1>
        <p className="text-lg leading-8 text-gray-700">
          Welcome to <strong>GeoCityDatabase</strong>, your premier source for comprehensive city characteristics
          and global information services. We pride ourselves on simplifying access to accurate, up-to-date data
          on cities, nations, and regions worldwide. Whether you are an academic, an analyst, or a business
          professional, GeoCityDatabase is your trusted partner for research and analysis.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

