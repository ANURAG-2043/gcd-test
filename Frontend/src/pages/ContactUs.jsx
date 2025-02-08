import React,{useEffect} from 'react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold my-6">Contact Us</h2>
        <p className="text-gray-700 mb-8">Feel free to reach out to us for more information.</p>
        <h1 className="uppercase text-3xl my-4">Contact Us</h1>
        <a href="#">
          <h2 className="my-4 text-2xl font-email">geocitydatabase@gmail.com</h2>
        </a>
        <a href="#">
          <h2 className="my-4 text-xl font-reg">www.geocitydatabase.com</h2>
        </a>
        <a href="#">
          <h2 className="my-4 text-xl text-slate-700">
            We love our customers, so feel free to contact us
          </h2>
        </a>
        <a href="#">
          <h2 className="my-4 text-xl font-semibold font-reg">GeoCityDatabase</h2>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
