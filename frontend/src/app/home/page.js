import React from 'react';
import PostInput from '@/components/CreatePost';
import OffCanvas from '@/components/OffCanvas';
import PostContainer from '@/components/PostContainer';
import Footer from '@/components/Footer';
import App from '@/components/AddContacts';

const Page = () => {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}> 
      <OffCanvas />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', minHeight: '100%' }}>
        <div style={{ padding: '20px', maxWidth: 'calc(100% - 700px)', margin: '0 auto' }}>
          <PostInput />
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
