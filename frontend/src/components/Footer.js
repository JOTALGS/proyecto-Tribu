'use client';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../public/images/logo.png';



const Footer = () => {
  return (
    <MDBFooter className='footer-custom text-center text-lg-start text-muted'>
      <MDBContainer fluid className='bg-green-700'>
        <MDBRow>
          <MDBCol className='mb-4'>
            <img width={200} height={150} src="/images/logo.png" alt="Tribu logo"/>
            <p>Our aim is to inspire and connect.</p>
          </MDBCol>

          <MDBCol className='p-4' md='6' lg='3'>
            <div>
              <h6 className='text-uppercase fw-bold'>Products</h6>
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
              <h6 className='text-uppercase fw-bold'>Useful links</h6>
              <ul className='list-unstyled mb-0'>
                <li><a href='#!' className='text-reset'>Pricing</a></li>
                <li><a href='#!' className='text-reset'>Settings</a></li>
                <li><a href='#!' className='text-reset'>Orders</a></li>
                <li><a href='#!' className='text-reset'>Help</a></li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol className='p-4' md='6' lg='3'>
            <div>
              <h6 className='text-uppercase fw-bold'>Contact</h6>
              <ul className='list-unstyled mb-0'>
                <li><MDBIcon color='secondary' icon='home' className='me-2' />MONTEVIDEO, UY 11200</li>
                <li><MDBIcon color='secondary' icon='envelope' className='me-2' />Tribu@gmail.com</li>
                <li><MDBIcon color='secondary' icon='phone' className='me-2' />+54 99 611 467</li>
                <li><MDBIcon color='secondary' icon='print' className='me-2' />+54 99 611 468</li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-2 bg-green-800'>
        © 2024 Derechos Reservados:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Tribu
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
