'use client';
import React from 'react';
import Footer from '@/components/Footer';
import OffCanvas from '@/components/OffCanvas';
import EditProfile from '@/components/EditProfile';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OffCanvas />
      <EditProfile />
      <Footer className="w-full bg-gray-800 text-white mt-auto" />
    </div>
  );
};

export default Page;