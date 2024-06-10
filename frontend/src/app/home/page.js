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
      <OffCanvas id="5" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', minHeight: '100%' }}>
        <div style={{ padding: '20px', maxWidth: 'calc(100% - 700px)', margin: '0 auto' }}>
          <PostInput onSubmit={handleChildData} />
          <PostContainer />
        </div>
        <div style={{ width: '700px', padding: '20px' }}>
          <App />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
