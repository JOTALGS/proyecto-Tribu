'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../stores/user';
import logo from '../../public/images/logo.png';
import { Button, Form } from 'react-bootstrap';

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

  const handleLogout = () => {
    clearAuthTokens();
  };

  return (
    <div className="w-full h-20 bg-green-700 sticky top-0">
      <div className="px-1 h-full w-full flex items-center">
        <div className="flex-start text-white">
          <img width={230} height={70} src="/images/logo.png" alt="Tribu logo" style={{ width: '15vw' }}/>
        </div>
  
        <div className="flex flex-center mx-auto justify-center items-center">
          <Form onSubmit={handleSearchSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search"
              className="px-3 py-1 mx-2 rounded-md bg-green-700 text-white placeholder-white border-2 border-green-800 focus:outline-none"
            />
            <Button variant="outline-success text-white" type="submit">Search</Button>
          </Form>
        </div>
        
        <div className="text-white pr-2" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '15vw' }}>
          {isAuthenticated ? (
            <Button variant="outline-success text-white" onClick={handleLogout}>Log out</Button>
          ) : (
            <Button variant="outline-success text-white">Log in</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
