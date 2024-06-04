'use client'
import OffCanvas from '@/components/OffCanvas'
import React, { useState } from 'react'
import ProfileInfo from '@/components/ProfileInfo'
import ProfileAbout from '@/components/ProfileAbout'

const page = () => {
  const [tabSelected, setTabSelected] = useState('profile');

  const handleChildData = (tabData) => {
    // Do something with the data received from the child component
    console.log('Data from child:', tabData);
    setTabSelected(tabData);
  };

  return (
    <div>
      <OffCanvas />
      <ProfileInfo tabData={handleChildData} />
      <ProfileAbout tabSelected={tabSelected}/>
    </div>
  )
}

export default page