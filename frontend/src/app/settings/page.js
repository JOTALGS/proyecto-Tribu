'use client';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import OffCanvas from '@/components/OffCanvas';
import api from '@/utils/api';

const Page = () => {
  const [profilePic, setProfilePic] = useState('');
  const [username, setUsername] = useState('');
  const [links, setLinks] = useState(['']);
  const [city, setCity] = useState('');
  const [role, setRole] = useState(''); // 'producer' or 'musician'
  const [bio, setBio] = useState('');

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSave = () => {
    const profileData = {
      profilePic,
      username,
      links,
      city,
      role,
      bio,
    };
    console.log(profileData);
    // api.saveProfile(profileData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="shadow-lg p-4 mx-auto flex-grow" style={{ maxWidth: '80vw', minWidth: '800px' }}>
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        
        <div className="profile-pic-section mb-4">
          <label className="block font-semibold mb-2">Profile Photo</label>
          <div className="profile-pic-preview mb-2">
            {profilePic && <img src={profilePic} alt="Profile" className="rounded-full w-16 h-16 object-cover" />}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-700"
          />
        </div>

        <div className="field mb-4">
          <label className="block font-semibold mb-2">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="shadow-md rounded-md w-full p-2 border border-gray-300" />
        </div>

        <div className="field mb-4">
          <label className="block font-semibold mb-2">Links</label>
          {links.map((link, index) => (
            <div key={index} className="link-field mb-2">
              <input
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="shadow-md rounded-md w-full p-2 border border-gray-300 mb-2"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddLink} className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">Add More</button>
        </div>

        <div className="field mb-4">
          <label className="block font-semibold mb-2">City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="shadow-md rounded-md w-full p-2 border border-gray-300" />
        </div>

        <div className="field mb-4">
          <label className="block font-semibold mb-2">Rol</label>
          <div className="role-buttons flex space-x-4">
            <button
              type="button"
              className={`role-button py-2 px-4 rounded-md ${role === 'producer' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleRoleChange('producer')}
            >
              Producer
            </button>
            <button
              type="button"
              className={`role-button py-2 px-4 rounded-md ${role === 'musician' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleRoleChange('musician')}
            >
              Musician
            </button>
          </div>
        </div>

        <div className="field mb-4">
          <label className="block font-semibold mb-2">About me</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="shadow-md rounded-md w-full p-2 border border-gray-300" />
        </div>

        <button type="button" onClick={handleSave} className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">Guardar</button>
      </div>

      <OffCanvas />

      <Footer className="w-full bg-gray-800 text-white mt-auto" />
    </div>
  );
};

export default Page;
