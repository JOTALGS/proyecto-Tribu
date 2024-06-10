'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/suggestions/')
      .then(response => {
        console.log('response suggestions', response.data.usersData)
        setUserData(response.data.usersData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MDBContainer className='' fluid>
      <section>
        <div className='shadow-8 rounded-4 overflow-hidden ml-auto overflow-y-auto' style={{height: '80vh', width: '95%', marginRight: '-15px' }}>
          <MDBTable>
            <MDBTableHead light>
              <tr>
                <th className="align-middle">Work with</th>
                <th className="align-middle">Role</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td className="align-middle">
                    <div className='d-flex align-items-center'>
                      <img
                        src={user.avatar}
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
      </section>
    </MDBContainer>
  );
}

export default App;
