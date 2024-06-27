'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../utils/api';
import { useAuth } from '../stores/user';
import styled from 'styled-components';
import Link from 'next/link';

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Center the form container horizontally */
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const { saveAuthTokens } = useAuth();

  const onButtonClick = async () => {
    const body = {
      username,
      email,
      password1,
      password2,
    };
    try {
      const response = await api.post('api/signup/', JSON.stringify(body));
      if (response.data) {
        saveAuthTokens(response.data);
        router.push('/home');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.email) setEmailError(error.response.data.email);
        if (error.response.data.password1 || error.response.data.password2) {
          setPasswordError(error.response.data.password1 || error.response.data.password2);
        }
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <VideoContainer>
        <Video src="/videos/tribu.mp4" type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <div className="w-full max-w-md rounded-lg mb-32 relative z-10">
        <LogoContainer>
          <Link href="/home">
            <img
              src="/images/logo.png"
              alt="Tribu logo"
              style={{ cursor: 'pointer', width: '360px', height: '140px' }}
            />
          </Link>
        </LogoContainer>
        <FormContainer>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Register</h2>
          <div className="space-y-4">
            <div>
              <input
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                placeholder="Enter your username here"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Enter your email here"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
              />
              {emailError && <label className="text-red-500 text-sm">{emailError}</label>}
            </div>
            <div>
              <input
                value={password1}
                onChange={(ev) => setPassword1(ev.target.value)}
                type="password"
                placeholder="Enter your password here"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
              />
            </div>
            <div>
              <input
                value={password2}
                onChange={(ev) => setPassword2(ev.target.value)}
                type="password"
                placeholder="Confirm your password here"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
              />
              {passwordError && <label className="text-red-500 text-sm">{passwordError}</label>}
            </div>
            <div>
              <button
                onClick={onButtonClick}
                className="w-full px-4 py-2 font-bold text-white rounded-lg 
                bg-gray-900 transition-all duration-900 
                hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800
                focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Go to TRIBU
              </button>
            </div>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default Register;
