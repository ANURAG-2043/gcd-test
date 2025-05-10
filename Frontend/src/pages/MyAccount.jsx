import React, { useState, useEffect } from "react";
import { User, BookMarked, FileDown, FileText } from "lucide-react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Simulating an API call to get user data
    console.log("Fetching user data...");
  }, [user, navigate]);

  // Initial state with dummy user data
  const [userData, setUserData] = useState({
    name: "Rathesh",
    email: "ratheshn@chergee.com",
    companyName: "Chergee",
    address: "123 Main Street",
    addressLine2: "Suite 456",
    cityName: "Mumbai",
    stateName: "Maharashtra",
    postcode: "400001",
    country: "India",
    phone: "+91 9876543210",
    fax: "",
    newsletter: true
  });

  const [activeSection, setActiveSection] = useState("account");

  // This would fetch user data from an API in a real application
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/profile`, {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (user) {
      fetchUserData();
    }
  }, [user]);

  // Component for Account Overview section
  const AccountOverview = () => (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium text-gray-700">Personal Information</h3>
          <div className="mt-2 space-y-2">
            <p><span className="font-medium">Name:</span> {userData.name}</p>
            <p><span className="font-medium">Email:</span> {userData.email}</p>
            <p><span className="font-medium">Phone:</span> {userData.phone}</p>
            {userData.fax && <p><span className="font-medium">Fax:</span> {userData.fax}</p>}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Company Details</h3>
          <div className="mt-2 space-y-2">
            <p><span className="font-medium">Company:</span> {userData.companyName}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium text-gray-700">Address</h3>
        <div className="mt-2">
          <p>{userData.address}</p>
          {userData.addressLine2 && <p>{userData.addressLine2}</p>}
          <p>{userData.cityName}, {userData.stateName} {userData.postcode}</p>
          <p>{userData.country}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium text-gray-700">Preferences</h3>
        <div className="mt-2">
          <p>Newsletter subscription: {userData.newsletter ? "Subscribed" : "Not subscribed"}</p>
        </div>
      </div>
    </div>
  );

  // Component for Profile section (form)
  const ProfileSection = () => {
    const [formData, setFormData] = useState({...userData});
    const [passwords, setPasswords] = useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    });

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
      });
    };

    const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      setPasswords({
        ...passwords,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/update-profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // Add any authentication headers if required
          },
          body: JSON.stringify(formData)
        });
    
        if (response.ok) {
          // Update the parent state only after successful API call
          setUserData(formData);
          alert("Profile updated successfully!");
        } else {
          const data = await response.json();
          alert(data.message || "Failed to update profile");
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        alert("An error occurred while updating your profile");
      }
    };

    const handleDelete = () => {
      if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
        // In a real app, you would call an API to delete the account
        alert("Account deletion request submitted.");
      }
    };

    return (
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">City Name</label>
              <input
                type="text"
                name="cityName"
                value={formData.cityName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">State Name</label>
              <input
                type="text"
                name="stateName"
                value={formData.stateName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Postcode</label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Fax</label>
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Sign me up for the newsletter
              </label>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-700">Change Password</h3>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwords.oldPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Password Again</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            
            <div className="flex justify-between pt-5">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                UPDATE
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                DELETE MY ACCOUNT
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  // Component for License section
  const LicenseSection = () => (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Your Licenses</h2>
      <p className="text-gray-600">You have no active licenses yet.</p>
      {/* License details would go here */}
    </div>
  );

  // Component for File Download section
  const FileDownloadSection = () => (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">File Downloads</h2>
      <p className="text-gray-600">You have no files available for download.</p>
      {/* File download list would go here */}
    </div>
  );

  // Component for Invoice section
  const InvoiceSection = () => (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Your Invoices</h2>
      <p className="text-gray-600">You have no invoices yet.</p>
      {/* Invoice list would go here */}
    </div>
  );

  // Sidebar navigation item component
  const NavItem = ({ icon, label, section }) => (
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
  );

  // Render different sections based on activeSection state
  const renderActiveSection = () => {
    switch (activeSection) {
      case "account":
        return <AccountOverview />;
      case "license":
        return <LicenseSection />;
      case "download":
        return <FileDownloadSection />;
      case "invoice":
        return <InvoiceSection />;
      case "profile":
        return <ProfileSection />;
      default:
        return <AccountOverview />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-md shadow overflow-hidden">
            {/* Account Header */}
            <div className="border-b px-4 py-3 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Account</span>
              <button 
                className="text-gray-500"
                onClick={() => setActiveSection("account")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <div>
              <NavItem 
                icon={<BookMarked size={20} />} 
                label="License" 
                section="license" 
              />
              <NavItem 
                icon={<FileDown size={20} />} 
                label="File Download" 
                section="download" 
              />
              <NavItem 
                icon={<FileText size={20} />} 
                label="Invoice" 
                section="invoice" 
              />
              <NavItem 
                icon={<User size={20} />} 
                label="Profile" 
                section="profile" 
              />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;