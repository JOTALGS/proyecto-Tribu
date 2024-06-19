import api from '@/utils/api';
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const BASE_URL = 'http://localhost:8000'; // Define the base URL

function VerticallyCenteredModal({ show, onHide, userData }) {
  const [requestStatus, setRequestStatus] = useState({});

  const sendFriendshipRequest = async (userId) => {
    try {
      const response = await api.post(`api/friends/${userId}/request/`, 'sent');
      // Handle the response as needed
      console.log(`Friendship request sent to user with ID: ${userId}`);
      
      // Toggle the request status
      setRequestStatus(prevStatus => ({
        ...prevStatus,
        [userId]: !prevStatus[userId]
      }));
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

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
              <th>Connect</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                  <td className="align-middle">
                    <div className='d-flex align-items-center'>
                      <img
                        src={`${BASE_URL}${user.image}`}
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <Link href={`/profile/${user.user_id}`} key={index} passHref>
                        <p className='fw-bold mb-1'>{user.username}</p>
                        <p className='text-muted mb-0'>{user.email}</p>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className='fw-normal mb-1'>{user.role}</p>
                    <p className='text-muted mb-0'>{user.category}</p>
                  </td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => sendFriendshipRequest(user.user_id)}
                    >
                      {requestStatus[user.user_id] ? "Cancel" : "Send Request"}
                    </Button>
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
