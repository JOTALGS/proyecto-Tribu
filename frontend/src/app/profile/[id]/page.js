'use client'
import Footer from '@/components/Footer'
import OffCanvas from '@/components/OffCanvas'
import React, { useEffect, useState } from 'react'
import ProfileInfo from '@/components/ProfileInfo'
import ProfileAbout from '@/components/ProfileAbout'
import api from '@/utils/api'
import ProfileSkills from '@/components/ProfileSkills'
import MyWork from '@/components/MyWork'


const page = ({params}) => {
  const [tabSelected, setTabSelected] = useState('profile');
  const [about, setAbout] = useState('');
  const [user, setUser] = useState('');

  const { id } = params


  const handleChildData = (tabData) => {
    // Do something with the data received from the child component
    console.log('Data from child:', tabData);
    setTabSelected(tabData);
  };

  const whenMounted = async () => {
    try {
      const response = await api.get(`api/users/${id}`);
      setAbout(response.data.bio)
      setUser(response.data)
      console.log('user', response.data)
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }

  useEffect(() => { 
    whenMounted();
  }, []);


  return (
    <div className='shadow-lg'>
      <div style={{ display: 'flex', flex: '1', minHeight: '100%' }}>
        <div style={{ flex: '1' }}>
          <OffCanvas id={user.user_id} />
        </div>
        <div style={{ flex: '10' }}>
          <ProfileInfo tabData={handleChildData} user={user}/>
          {tabSelected === 'profile' ? (
            <section>
              <ProfileAbout bio={about}/>
              <ProfileSkills/>
            </section>
          ) : tabSelected === 'posts' ? (
            <MyWork/>
          ) : (
            <p>Default Content</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page