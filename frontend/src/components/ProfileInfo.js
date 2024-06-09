import React, { useState } from 'react';
import { MDBCardImage } from 'mdb-react-ui-kit';
import MyWork from './MyWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Contacto() {
  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <h3 style={{ margin: '0' }}>Contacto</h3>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px' }} />
          <span>+59891972654</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
          <span>ejemplo@gmail.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faLink} style={{ marginRight: '10px' }} />
          <span><a href="https://example.com">https://example.com</a></span>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage({ tabData, user }) {
  const [selectedButton, setSelectedButton] = useState('profile');
  const [selectedButton2, setSelectedButton2] = useState(null);
  const [showMyWorkContent, setShowMyWorkContent] = useState(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    tabData(buttonName);

    
    if (buttonName === 'profile') {
      setShowMyWorkContent(false);
    }
  };

  const handleButtonClick2 = (buttonName) => {
    setSelectedButton2(buttonName);
    tabData(buttonName);
  };

  const handleMyWorkButtonClick = () => {
    setShowMyWorkContent(true);
  };

  return (
    <section className="bg-white py-3">
      <div className="w-full">
        <div className="mx-auto flex items-center border" style={{ width: '70vw', height: '28vh' }}>
          <div className="border mr-1" style={{ width: '45vw', height: '100%' }}>
            <div className="m-4" style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="mx-auto"
                  style={{ width: '150px', borderRadius: '50%' }}
                  fluid
                />
              </div>
              <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1rem' }}>
                <p>{user.username}</p>
                <p className="text-gray-500 mb-1">Productor músical</p>
                <p className="text-gray-500 mb-4">Montevideo, UY</p>
              </div>
            </div>
            <div className="ml-36 my-2" style={{ width: '45vw' }}>
              <button
                className={`mx-1 p-2 rounded ${selectedButton === 'profile' ? 'bg-green-500 text-white' : 'bg-black text-white'} hover:bg-green-600 transition-colors duration-300`}
                onClick={() => handleButtonClick('profile')}
              >
                Profile
              </button>
              {/* Button to show the content of "My Work" */}
              <button
                className={`mx-1 p-2 rounded ${selectedButton === 'posts' ? 'bg-green-500 text-white' : 'bg-black text-white'} hover:bg-green-600 transition-colors duration-300`}
                onClick={() => {
                  handleButtonClick('posts');
                  handleMyWorkButtonClick(); // Call event handler to show "My Work" content
                }}
              >
                My work
              </button>
            </div>
          </div>
          <div className="border flex items-center ml-1" style={{ width: '45vw', height: '100%' }}>
            <div className="mx-auto my-2" style={{ width: '100%', height: '100%' }}>
              <Contacto />
            </div>
          </div>
        </div>
      </div>

      {/* Show my work i f showMyWorkContent is true */}
      {showMyWorkContent && <MyWork />}
      
    </section>
  );
}
