import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <MDBFooter className='text-white' style={{ backgroundColor: '#030712' }}>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol xs='12' md='6' lg='3' className='mb-4 p-4 order-lg-2'>
            <div>
              <h6 className='text-uppercase fw-bold'>About tribu</h6>
              <ul className='list-unstyled mb-0'>
                <li><a href='#!' className='text-reset'>Musicians</a></li>
                <li><a href='#!' className='text-reset'>Producers</a></li>
                <li><a href='#!' className='text-reset'>Connect</a></li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol xs='12' md='6' lg='3' className='mb-4 p-4 order-lg-3'>
            <div>
              <h6 className='text-uppercase fw-bold'>Our platform</h6>
              <ul className='list-unstyled mb-0'>
                <li><a href='home' className='text-reset'>Home</a></li>
                <li><a href='settings' className='text-reset'>Settings</a></li>
                <li><a href='Profile' className='text-reset'>Profile</a></li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol xs='12' md='6' lg='3' className='mb-4 p-4 order-lg-4'>
            <div>
              <h6 className='text-uppercase fw-bold'>Contact with our team</h6>
              <ul className='list-unstyled mb-0'>
                <li><a href='mailto:tribu@gmail.com' className='text-reset'><MDBIcon color='secondary' icon='envelope' className='me-2' />tribu.co.uy@gmail.com</a></li>
                <li><MDBIcon color='secondary' icon='home' className='me-2' />MONTEVIDEO, UY 11200</li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol xs='12' md='6' lg='3' className='mb-4 order-lg-1 d-flex justify-content-lg-start align-items-lg-end'>
            <img width={230} height={70} src={logo.src} alt="Tribu logo" style={{ width: '70vw' }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-2' style={{ backgroundColor: '#030712' }}>
        © 2024 TRIBU, All rights reserved.
      </div>
    </MDBFooter>
  );
}

export default Footer;
