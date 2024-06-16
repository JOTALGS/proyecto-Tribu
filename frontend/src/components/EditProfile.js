import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '@/utils/api';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState('');
  const [links, setLinks] = useState(['']);
  const [city, setCity] = useState('');
  const [role, setRole] = useState(''); // 'producer' or 'musician'
  const [bio, setBio] = useState('');

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
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

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    console.log('Form submitted'); // Check if the function is called

    const formData = new FormData();
    formData.append('profilePic', profilePic);
    formData.append('username', username);
    formData.append('city', city);
    formData.append('role', role);
    formData.append('bio', bio);

    links.forEach((link, index) => {
      formData.append(`links[${index}]`, link);
    });

    try {
      const response = await api.post('/api/edit_profile/', formData);
      console.log('Response:', response.data); // Check if API response is received
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="shadow-lg p-4 mx-auto flex-grow" style={{ maxWidth: '80vw', minWidth: '800px' }}>
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      <Form onSubmit={handleSave} className="flex flex-col">
        <div className="profile-pic-section mb-4">
          <label className="block font-semibold mb-2">Profile Photo</label>
          <div className="profile-pic-preview mb-2">
            {profilePic && <img src={URL.createObjectURL(profilePic)} alt="Profile" className="rounded-full w-16 h-16 object-cover" />}
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
          <label className="block font-semibold mb-2">Role</label>
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

        <Button type="submit" className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">Save</Button>
      </Form>
    </div>
  );
};

export default EditProfile;
