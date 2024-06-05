'use client'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the access token to the headers
api.interceptors.request.use(
  config => {
    var token = localStorage.getItem('accessToken');
    if (token) {
      token = token.replace(/^"|"$/g, '');

      config.headers['Authorization'] = `Bearer ${token}`;
    }
    //console.log('Headers before API call:', config.headers);

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export default api;