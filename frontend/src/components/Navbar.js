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
    backgroundColor: buttonHovered ? '#cc3c6d' : 'transparent',
    borderColor: '#cc3c6d',
    borderRadius: '5px',
    padding: '0.5em 1em',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    color: buttonHovered ? '#fff' : '#e75480',
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
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#a73356')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#cc3c6d')}
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
