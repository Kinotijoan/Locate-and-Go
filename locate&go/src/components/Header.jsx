import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Locatelogo from '../assets/LOCATE_and_Go_logo-removebg-preview.png';

const Header = () => {
  const navigate = useNavigate();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSettingsClick = () => {
    // Handle settings click logic
  };

  const handleMoversQuoteClick = () => {
     navigate('/moversquote');
  }

  const handleLogoutClick = () => {
    // Handle logout click logic
    alert("You have been logged out.");
    navigate('/')
    
  };


  return (
    <div className='flex justify-between items-center bg-amber-900 text-black pl-10 pr-10'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className='flex items-center'>
        <img className='w-16' src={Locatelogo} alt="Locate logo" />
        <h2 className='font-mono'>Locate and Go</h2>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={toggleDropdown}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>

      {dropdownVisible && (
        <div   className="absolute top-8 right-24 mt-2 bg-white rounded-md shadow-lg">
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={handleSettingsClick}
            >
              Settings
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={handleMoversQuoteClick}
            >
              Movers Quote
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={handleLogoutClick}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;