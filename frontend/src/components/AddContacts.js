'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import VerticallyCenteredModal from './CenteredModal';

function AddContacts({ sendSignal }) {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.get('http://localhost:8000/api/suggestions/')
        .then(response => {
          console.log('response suggestions', response.data.usersData);
          setUserData(response.data.usersData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

      const style = document.createElement('style');
      style.innerHTML = `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  return (
    <MDBContainer className='' fluid>
      <section>
        <div onClick={handleOpenModal}>
          <div className='shadow-8 rounded-4 overflow-hidden overflow-y-auto ml-auto hide-scrollbar' style={{ height: '80vh', width: '95%', marginRight: '0px', overflowY: 'auto' }}>
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <td>Work with</td>
                  <td>Role</td>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {userData.map((user, index) => (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://via.placeholder.com/200x100'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{user.username}</p>
                          <p className='text-muted mb-0'>{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className='fw-normal mb-1'>{user.role}</p>
                      <p className='text-muted mb-0'>{user.category}</p>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>

        <VerticallyCenteredModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            userData={userData}
            />
      </section>
    </MDBContainer>
  );
}

export default AddContacts;
