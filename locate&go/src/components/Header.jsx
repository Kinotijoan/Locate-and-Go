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


  const handleHomepageClick = () => {
    navigate('/Homepage');
  }

  const handleMoversQuoteClick = () => {
     navigate('/movinginfo');
  }

  const handleLogoutClick = () => {
    // Handle logout click logic
    alert("You have been logged out.");
    navigate('/')
    
  };


  return (
    <div className='flex justify-between items-center bg-amber-900 text-black pl-10 pr-10'>
      <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none"
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" class="w-6 h-6"
      >
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
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
        className="w-6 h-6  cursor-pointer"
        onClick={toggleDropdown}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>

      {dropdownVisible && (
        <div   className="absolute top-24 right-24 mt-2 bg-transparent rounded-md shadow-lg font-bold border-2 border-amber-900 ">
          <ul className="py-2">
          <li
              className="px-4 py-2 hover:bg-amber-600 cursor-pointer flex items-center"
              onClick={handleHomepageClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

              Homepage
            </li>
            <li
              className="px-4 py-2 hover:bg-amber-600 cursor-pointer flex items-center"
              onClick={handleMoversQuoteClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>

              Moving Info
            </li>
            <li
              className="px-4 py-2 hover:bg-amber-600 cursor-pointer flex items-center"
              onClick={handleSettingsClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>

              Settings
            </li>
            <li
              className="px-4 py-2 hover:bg-amber-600 cursor-pointer flex items-center"
              onClick={handleLogoutClick}

            >
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.75 12h12m-6.375-6.375L17.25 12l-5.875 5.875M5.75 12L17.25 12" />
              </svg>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;