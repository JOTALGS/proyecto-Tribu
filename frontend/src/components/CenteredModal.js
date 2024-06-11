import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function VerticallyCenteredModal({ show, onHide, userData }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        animation: `${show ? 'fadeIn' : 'fadeOut'} 0.5s ease-out`,
        opacity: show ? 1 : 0,
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}
      </style>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Expand Your Network
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <table className="table">
          <thead>
            <tr>
              <th>Work with</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal;
