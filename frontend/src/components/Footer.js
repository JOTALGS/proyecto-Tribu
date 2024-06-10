'use client'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../public/images/logo.png';

const Footer = () => {
  return (
    <MDBFooter className='footer-custom text-center text-lg-start text-white'> {/* Cambiado a 'text-white' */}
      <MDBContainer fluid className='bg-green-700'>
        <MDBRow>
          <MDBCol className='mb-4'>
            <img width={230} height={70} src="/images/logo.png" alt="Tribu logo" style={{ width: '15vw' }}/>
            <p></p>
          </MDBCol>

          <MDBCol className='p-4' md='6' lg='3'>
            <div>
              <h6 className='text-uppercase fw-bold'>Our aim</h6>
              <ul className='list-unstyled mb-0'>
                <li><a href='#!' className='text-reset'>Musicians</a></li>
                <li><a href='#!' className='text-reset'>Producers</a></li>
                <li><a href='#!' className='text-reset'>Inspire</a></li>
                <li><a href='#!' className='text-reset'>Connect</a></li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol className='mb-4 p-4' md='6' lg='3'>
            <div>
              <h6 className='text-uppercase fw-bold'>Our platform</h6>
              <ul className='list-unstyled mb-0'>
                <li><a href='#!' className='text-reset'>Home</a></li>
                <li><a href='#!' className='text-reset'>Settings</a></li>
                <li><a href='#!' className='text-reset'>Landing page</a></li>
                <li><a href='#!' className='text-reset'>Profile</a></li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol className='p-4' md='6' lg='3'>
            <div>
              <h6 className='text-uppercase fw-bold'>Contact with our team</h6>
              <ul className='list-unstyled mb-0'>
                <li><MDBIcon color='secondary' icon='envelope' className='me-2' />tribu@gmail.com</li>
                <li><MDBIcon color='secondary' icon='home' className='me-2' />MONTEVIDEO, UY 11200</li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-2 bg-green-700'>
        © 2024 TRIBU. Todos los Derechos Reservados.
        <a className='text-reset fw-bold' href='/home'>
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
