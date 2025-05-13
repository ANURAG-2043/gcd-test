import React, { useState, useEffect } from "react";
import { Database } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const ProductsMenu = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Get the current path without the leading slash
    const currentPath = location.pathname.slice(1);
    setActiveSection(currentPath || "free");
  }, [location]);

  // Sidebar navigation item component
  const NavItem = ({ icon, label, section, to }) => (
    <Link to={to}>
      <div 
        className={`flex items-center p-3 cursor-pointer ${
          activeSection === section 
          ? "text-green-600 font-medium bg-gray-100" 
          : "text-gray-600 hover:bg-gray-50"
        }`}
        onClick={() => setActiveSection(section)}
      >
        <div className="mr-3">
          {icon}
        </div>
        <span>{label}</span>
      </div>
    </Link>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/9">
          <div className="bg-white rounded-md shadow overflow-hidden">
            <div className="border-b px-4 py-3">
              <span className="text-lg font-medium text-gray-700">Products</span>
            </div>
            
            <div>
              <NavItem 
                icon={<Database size={20} />} 
                label="Free GeoCityDatabase" 
                section="free"
                to="/free"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="Essential GeoCityDatabase" 
                section="essential"
                to="/essential"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="Exclusive GeoCityDatabase" 
                section="exclusive"
                to="/exclusive"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="Elite GeoCityDatabase" 
                section="elite"
                to="/elite"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="Ultimate GeoCityDatabase" 
                section="ultimate"
                to="/ultimate"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="Major Cities GeoCityDatabase" 
                section="major-cities"
                to="/major-cities"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="Cities ZIPCode Database" 
                section="cities-zip-code"
                to="/cities-zip-code"
              />
              <NavItem 
                icon={<Database size={20} />} 
                label="VIP/Paramount [Custom Made] GeoCityDatabase" 
                section="custom"
                to="/custom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;