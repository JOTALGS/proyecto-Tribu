'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <ul className="hidden md:flex gap-x-6 text-white">
          <li>
            <Link href="/about">
              <p>Tribu</p>
            </Link>
          </li>
        </ul>
  

        <form onSubmit={handleSearchSubmit} className="flex items-center">
        <div className="h-8 top-50% w-[1px] bg-gray-300"></div>
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
            className="px-3 py-1 rounded-md bg-emerald-800 text-white placeholder-white border-2 border-emerald-800 focus:outline-none"
          />
        <div className="h-8 top-50% w-[1px] bg-gray-300"></div>
        </form>

        <div className="text-white">
          {userName ? <p>Welcome</p> : <p>Please log in</p>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
