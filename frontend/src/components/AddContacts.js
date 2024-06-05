'use client'
import React from 'react';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';

function App() {
  return (
    <div>
      <style jsx>{`
        body {
          margin: 0;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        }
      `}</style>
      <MDBContainer fluid>
        <section>
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <MDBTable>
              <MDBTableHead light>
                <tr>
                  <th style={{ fontSize: '1.0em', fontWeight: 'bold' }}>PEOPLE YOU MAY KNOW</th>
                  <th>Role</th>
                  <th style={{ textAlign: 'center' }}>Add Contacts</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody style={{ verticalAlign: 'middle' }}>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>John Doe</p>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>Musician</p>
                    <p className='text-muted mb-0'>Bass</p>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                      Add Contact
                    </MDBBtn>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                        className='rounded-circle'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Alex Ray</p>
                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>Producer</p>
                    <p className='text-muted mb-0'>Techno</p>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                      Add Contact
                    </MDBBtn>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                        className='rounded-circle'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Kate Hunington</p>
                        <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>Producer</p>
                    <p className='text-muted mb-0'>Beats</p>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                      Add Contact
                    </MDBBtn>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                        className='rounded-circle'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Karen Smith</p>
                        <p className='text-muted mb-0'>karen.smith@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>Musician</p>
                    <p className='text-muted mb-0'>Drums</p>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                      Add Contact
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>
        </section>
      </MDBContainer>
    </div>
  );
}

export default App;
