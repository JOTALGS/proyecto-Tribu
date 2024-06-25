'use client'
import React from 'react';
import Login from '../../components/LoginForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


const Page = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default Page;
