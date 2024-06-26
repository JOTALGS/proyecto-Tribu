'use client';
import React, { useState } from 'react';
import OffCanvas from '@/components/OffCanvas';
import PostContainer from '@/components/PostContainer';
import Footer from '@/components/Footer';
import AddContacts from '@/components/AddContacts';
import api from '@/utils/api';
import Navbar from '../../components/Navbar';


const Page = () => {

  const id = localStorage.getItem('userId');

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: '1', minHeight: '100%' }}>
        <div style={{ flex: '1' }}>
          <OffCanvas id={id}/>
        </div>
        <div className='mx-auto' style={{ flex: '3', maxWidth: 'calc(100% - 700px)' }}>
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
