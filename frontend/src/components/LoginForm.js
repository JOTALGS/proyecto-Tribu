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
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const { saveAuthTokens } = useAuth();

  const onButtonClick = async () => {
    const body = {
      username: username,
      password: password
    };

    try {
      const response = await api.post('api/login/', JSON.stringify(body));
      saveAuthTokens(response.data);
      router.push('/home');
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <VideoContainer>
        <Video src="/videos/tribu.mp4" type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <div className="w-full max-w-md rounded-lg mb-32 relative z-10">
        <Link href="/home">
          <img
            src="/images/logo.png"
            alt="Tribu logo"
            style={{ cursor: 'pointer', width: '360px', height: '140px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Link>
        <FormContainer>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>
          <div className="space-y-4">
            <div>
              <input
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                placeholder="Enter your email here"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
              />
              {emailError && <label className="text-red-500 text-sm">{emailError}</label>}
            </div>
            <div>
              <input
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                placeholder="Enter your password here"
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
                Welcome back
              </button>
            </div>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default Login;
