'use client';
import React, { useState } from 'react';
import PostInput from '@/components/CreatePost';
import OffCanvas from '@/components/OffCanvas';
import PostContainer from '@/components/PostContainer';
import Footer from '@/components/Footer';
import AddContacts from '@/components/AddContacts';
import api from '@/utils/api';
import Navbar from '../../components/Navbar';


const Page = () => {

  const id = localStorage.getItem('userId');

  const handleChildData = async (data) => {
    console.log('Data from child:', data);

    try {
      const response = await api.post('api/create/', data); // Use the latest form data
      console.log('response', response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: '1', minHeight: '100%' }}>
        <div style={{ flex: '1' }}>
          <OffCanvas id={id}/>
        </div>
        <div className='mx-auto' style={{ flex: '3', maxWidth: 'calc(100% - 700px)' }}>
          <PostInput onSubmit={handleChildData} />
          <PostContainer />
        </div>
        <div style={{ flex: '1', width: '700px', padding: '20px' }}>
          <AddContacts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
