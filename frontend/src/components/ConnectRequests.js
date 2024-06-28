import api from '@/utils/api';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function ConnectRequests({ paramsUserId }) {
  const [userData, setUserData] = useState([]);

  const getFriendshipRequest = async () => {
    try {
      const response = await api.get(`api/friends/${paramsUserId}/request/`);
      // Handle the response as needed
      console.log('respp', response.data);
      setUserData(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getFriendshipRequest();
  }, []);

  const handleFriendshipRequest = async (userId) => {
    try {
      const response = await api.post(`api/friends/${userId}/accepted/`);
      // Handle the response as needed
      console.log(`Friendship request accepted user with ID: ${userId}`);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const hardcodedUsers = [
    { name: 'Ana', role: 'Musician', category: '', image: 'https://media.wonderlandmagazine.com/uploads/2021/08/VennaPress01Lucero-1.jpg' },
    { name: 'Jose Hernandez', role: 'Musician', category: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-RV88iLqLB-GFPiW787_bPUHqoR-hAIieQ&s' },
    { name: 'Patricia Ruiz', role: 'Musician', category: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKr0HZ_xpGR7L8O1c4lfFZHXeTsWKG9kYQw&s' },
    { name: 'María García', role: 'Musician', category: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwmoMU1r0TrId0oywLGQbarxcxb4_FlEQ4A&s' }
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <div
          className="mx-auto px-8 py-6 bg-white border text-black rounded-lg"
          style={{ 
            maxWidth: '70vw',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'  // Agregando sombra aquí
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Work with</th>
                <th>Role</th>
                <th>Connect</th>
              </tr>
            </thead>
            <tbody>
              {hardcodedUsers.map((user, index) => (
                <tr key={index}>
                  <td className="align-middle">
                    <div className='d-flex align-items-center'>
                      <img
                        src={user.image}
                        alt={user.name}
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className='fw-normal mb-1'>{user.role}</p>
                    <p className='text-muted mb-0'>{user.category}</p>
                  </td>
                  <td>
                    <Button 
                      onClick={() => handleFriendshipRequest(user.name)}
                      className="font-bold text-white rounded-lg 
                        bg-gray-900 transition-all duration-900 
                        hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800
                        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                      style={{
                        backgroundColor: '#1a202c',  // Dark blue color
                        padding: '0.375rem 0.75rem',  // Original size
                      }}
                    >
                      Connect
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
