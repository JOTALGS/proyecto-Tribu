'use client'
import React, { useEffect, useState } from 'react';
import PostInput from '@/components/CreatePost';
import OffCanvas from '@/components/OffCanvas';
import PostContainer from '@/components/PostContainer';
import Footer from '@/components/Footer';
import App from '@/components/AddContacts';
import api from '@/assets/api';

const Page = () => {
  const [fromData, setFormData] = useState();

  const handleChildData = (onSubmit) => {
    // Do something with the data received from the child component
    console.log('Data from child:', onSubmit);
    setFormData(onSubmit);
  };

  useEffect(() => {
    const whenMounted = async () => {
      try {
        const response = await api.post('api/create/', fromData); // Use the latest form data
        console.log('response', response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    };

    whenMounted(); // Call whenMounted function
  }, [fromData  ]); 


  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}> 
      <div style={{ display: 'flex', flex: '1', minHeight: '100%' }}>
        <div style={{ flex: '1' }}>
          <OffCanvas id="5" />
        </div>
        <div className='mx-auto' style={{ flex: '3', padding: '10px', maxWidth: 'calc(100% - 700px)' }}>
          <PostInput onSubmit={handleChildData} />
          <PostContainer />
        </div>
        <div style={{ flex: '1', width: '700px', padding: '20px' }}>
          <App />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
