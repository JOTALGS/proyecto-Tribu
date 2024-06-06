'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../stores/user';
import logo from '../../public/images/logo.png';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { isAuthenticated, clearAuthTokens } = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken) {
        setUserName(storedToken);
      }
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search action based on searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="w-full h-20 bg-green-700 sticky top-0" style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
      <div className="px-1 h-full w-full flex items-center">
        <div className="flex-start text-white">
          <img width={230} height={70} src="/images/logo.png" alt="Tribu logo" style={{ width: '15vw' }}/>
        </div>
  
        <div className="flex flex-center mx-auto justify-center items-center">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <div className="h-8 w-[1px] bg-gray-300"></div>
            <button type="submit" className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="white" className="size-6">
                <path linecap="round" linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-3 py-1 mx-2 rounded-md bg-green-700 text-white placeholder-white border-2 border-green-800 focus:outline-none"
            />
            <div className="h-8 w-[1px] bg-gray-300"></div>
          </form>
        </div>
        
        <div className="text-white pr-2" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '15vw' }}>
          {isAuthenticated ? <button onClick={clearAuthTokens}>Log out</button> : <p>Please log in</p>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
