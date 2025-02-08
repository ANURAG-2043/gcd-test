import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Footer extends PureComponent {
  render() {
    return (
      <>
        <footer className="flex flex-col mt-12 content-center items-center bg-gray-900 text-white py-8">
          <div className="flex flex-col items-center mb-8">
            <h1 className="py-2 text-4xl font-semibold max-md:text-2xl max-md:text-center">
              Subscribe to Newsletter
            </h1>
            <h2 className="text-sm text-center">
              Enter your email address to register to our newsletter subscription!
            </h2>
            <input
              className="flex h-8 w-96 max-md:h-6 max-md:w-36 rounded-md border py-2 px-4 mt-6 mb-2 shadow-md"
              type="email"
              placeholder="Email"
            />
            <button className="btn btn-primary bg-sky-700 px-4 max-md:px-[10px] max-md:text-[10px] max-md:py-[6px] py-2 text-white rounded-md text-xs my-3 shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Send
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Site Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
                <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Product Links</h3>
              <ul className="space-y-2">
                <li><Link to="/free" className="hover:underline">Free GeoCityDatabase</Link></li>
                <li><Link to="/essential" className="hover:underline">Essential GeoCityDatabase</Link></li>
                <li><Link to="/exclusive" className="hover:underline">Exclusive GeoCityDatabase</Link></li>
                <li><Link to="/elite" className="hover:underline">Elite GeoCityDatabase</Link></li>
                <li><Link to="/ultimate" className="hover:underline">Ultimate GeoCityDatabase</Link></li>
                <li><Link to="/major-cities" className="hover:underline">Major-Cities GeoCityDatabase</Link></li>
                <li><Link to="/cities-zip-code" className="hover:underline">Cities ZIPCode Database</Link></li>
                <li><Link to="/custom" className="hover:underline">VIP/Paramount [Custom Made] GeoCityDatabase</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex mt-12 mb-6 justify-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                alt="LinkedIn"
                />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
                />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v1.png"
                alt="Twitter"
                />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
                />
            </a>
        </div>

          <div className="text-center text-xs mt-6 text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
