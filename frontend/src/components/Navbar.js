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

  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonMouseEnter = () => {
    setButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setButtonHovered(false);
  };

  const buttonStyle = {
    backgroundImage: buttonHovered
      ? 'linear-gradient(to left, #5f005f, #920092, #ff4da6)'
      : 'linear-gradient(to right, #030712, #030712, #030712)',
    borderColor: '#cc3c6d',
    borderRadius: '5px',
    padding: '0.5em 1em',
    transition: 'background-image 0.8s ease, border-color 0.8s ease',
    color: '#e75480',
    position: 'relative',
    zIndex: '1',
    cursor: 'pointer', // Optional: add cursor pointer on hover
  };

  return (
    <div className="w-full h-20" style={{ backgroundColor: '#030712', position: 'sticky', top: 0, zIndex: 50 }}>
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
            <Button
              variant="outline-success text-white"
              style={buttonStyle}
              onClick={handleLogout}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              Log out
            </Button>
          ) : (
            <Link href="/login">
              <Button
                variant="outline-success text-white"
                style={buttonStyle}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                Log in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
