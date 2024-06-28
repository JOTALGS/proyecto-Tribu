import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BASE_URL = 'http://localhost:8000'; // Define the base URL

function Contacto({ user }) {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md" style={{ width: '100%', height: '100%' }}>
      <h3 className="text-lg font-bold mb-4">Contact</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-600" />
          <span>frankieproducer@gmail.com</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLink} className="mr-2 text-blue-600" />
          <span><a href={user.links} className="text-blue-600">{user.links}</a></span>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage({ tabData, user }) {
  const [selectedButton, setSelectedButton] = useState('profile');
  const [showMyWorkContent, setShowMyWorkContent] = useState(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    tabData(buttonName);

    if (buttonName === 'profile') {
      setShowMyWorkContent(false);
    }
  };

  const handleMyWorkButtonClick = () => {
    setShowMyWorkContent(true);
  };

  return (
    <section className="bg-white py-3">
      <div className="w-full">
        <div className="mx-auto flex items-center border rounded-lg shadow-md" style={{ width: '70vw', height: '28vh' }}>
          <div className="border mr-1 rounded-lg" style={{ width: '45vw', height: '100%' }}>
            <div className="m-4 flex">
              <div className="flex flex-col items-center justify-center" style={{ width: '150px', height: '150px' }}>
                <img
                  src={`${BASE_URL}${user.image}`} // Use the base URL here
                  alt=''
                  className='rounded-circle'
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-4">
                <p className="text-xl font-bold">{user.username}</p>
                <p className="text-gray-500 mb-1">{user.choice}</p>
                <p className="text-gray-500 mb-4">{user.city}</p>
              </div>
            </div>
            <div className="ml-36 my-2" style={{ width: '45vw' }}>
              <button
                className={`mx-1 p-2 rounded-lg ${selectedButton === 'profile' ? 'bg-gradient-to-r from-pink-500 via-pink-900 to-purple-800 text-white' : 'bg-gray-900 text-white'} 
                  hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800 transition-all duration-300`}
                onClick={() => handleButtonClick('profile')}
              >
                Profile
              </button>
              <button
                className={`mx-1 p-2 rounded-lg ${selectedButton === 'posts' ? 'bg-gradient-to-r from-pink-500 via-pink-900 to-purple-800 text-white' : 'bg-gray-900 text-white'} 
                  hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800 transition-all duration-300`}
                onClick={() => {
                  handleButtonClick('posts');
                  handleMyWorkButtonClick();
                }}
              >
                My work
              </button>
            </div>
          </div>
          <div className="border flex items-center ml-1 rounded-lg" style={{ width: '45vw', height: '100%' }}>
            <div className="mx-auto my-2" style={{ width: '100%', height: '100%' }}>
              <Contacto user={user} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
