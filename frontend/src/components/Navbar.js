'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../stores/user';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const { isAuthenticated, clearAuthTokens } = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken) {
        setUserName(storedToken);
      }
    }
  }, []);

  const handleLogout = () => {
    clearAuthTokens();
  };

  return (
    <div className="w-full h-20 bg-green-700 sticky top-0">
      <div className="px-1 h-full w-full flex items-center justify-between">
        <Link href="/home">
          <img
            width={230}
            height={70}
            src="/images/logo.png"
            alt="Tribu logo"
            style={{ cursor: 'pointer', width: '15vw' }}
          />
        </Link>
        <div className="text-white pr-2 flex items-center">
          {isAuthenticated ? (
            <Button variant="outline-success text-white" onClick={handleLogout}>
              Log out
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="outline-success text-white">Log in</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
