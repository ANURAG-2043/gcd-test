import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from "./components/Navbar";
// import { AuthProvider } from './utils/AuthContext';

import Hero from "./components/Hero";
import Rate from "./components/Rate";
import Products from "./components/Products";
import Features from "./components/Features";
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import DataSourcing from "./pages/DataSourcing";
import CityDatabases from "./pages/City_db"
import GlobalInformation from "./pages/Global_Info"
import Register from './pages/Register';
import FreeSupport from './pages/Free_support';

import FreeEdition from './pages/products/free';
import EssentialEdition from './pages/products/Essential'
import ExclusiveEdition from './pages/products/Exclusive'
import EliteEdition from './pages/products/Elite'
import UltimateEdition from './pages/products/Ultimate'
import CitiesZipCodeEdition from './pages/products/Cities_ZipCode'
import MajorCitiesEdition from './pages/products/major_cities'
import CustomEdition from './pages/products/Custom'
import { AuthProvider } from './utils/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Router>
        <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={ <>
                <Hero />
                <Rate />
                <Products />
                <Features />
              </> }/>

          <Route path="/data-sourcing" element={<DataSourcing />}/>
          <Route path="/city_databases" element={<CityDatabases />}/>
          <Route path="/global_information" element={<GlobalInformation />}/>

          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="/free-support" element={<FreeSupport />}/>

          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/product-page" element={<ProductPage />}/>

          <Route path="/free" element={<FreeEdition />}/>
          <Route path="/essential" element={<EssentialEdition />}/>
          <Route path="/exclusive" element={<ExclusiveEdition />}/>
          <Route path="/elite" element={<EliteEdition />}/>
          <Route path="/ultimate" element={<UltimateEdition />}/>
          <Route path="/major-cities" element={<MajorCitiesEdition />}/>
          <Route path="/cities-zip-code" element={<CitiesZipCodeEdition />}/>
          <Route path="/custom" element={<CustomEdition />}/>

          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;
