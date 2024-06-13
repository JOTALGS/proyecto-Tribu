'use client'
import api from '@/utils/api';
// context/user.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const saveAuthTokens = (data) => {
    setAccessToken(data.access);
    setRefreshToken(data.refresh);
    localStorage.setItem('accessToken', JSON.stringify(data.access));
    localStorage.setItem('refreshToken', JSON.stringify(data.refresh));
    whenMounted();
    setIsAuthenticated(true);
  };

  const clearAuthTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
  };

  const whenMounted = async () => {
    try {
      const response = await api.get(`api/me/`);
      console.log('user', response.data.user_id)
      localStorage.setItem('userId', JSON.stringify(response.data.user_id));
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }

  useEffect(() => {
    const accTokens = localStorage.getItem('accessToken');
    const refTokens = localStorage.getItem('refreshToken');
    if (accTokens && refTokens) {
        setAccessToken(accTokens);
        setRefreshToken(refTokens);
        setIsAuthenticated(true);
    }
    whenMounted();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, saveAuthTokens, clearAuthTokens, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
