import React, {useEffect} from 'react';

const FreeSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold my-6">Free Support</h2>
        <p className="text-gray-700">Feel free to reach out to us for more information.</p>
        <div className="my-8">
          <h1 className="uppercase text-3xl my-4">
            GeoCityDatabase.com provides free email support for all subscribers.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FreeSupport;


