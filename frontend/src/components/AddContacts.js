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
      <MDBContainer className='' fluid>
        <section>
          <div className='shadow-8 rounded-4 overflow-hidden ml-auto'  style={{ width: '85%', maxWidth: '350px', height: '30vh' }}>
            <MDBTable>
              <MDBTableHead light>
                <tr>
                  <th>Work with</th>
                  <th>Role</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody style={{ verticalAlign: 'middle' }}>
                <tr>
                  <td>
                    <a href='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className='d-flex align-items-center'>
                        <img
                          src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>John Doe</p>
                          <p className='text-muted mb-0'>jd@gmail.com</p>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>Producer</p>
                    <p className='text-muted mb-0'>Beats</p>
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
