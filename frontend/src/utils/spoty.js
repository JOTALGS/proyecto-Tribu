'use client'
import axios from 'axios';

const client_id = 'e97034180fa8488c8d9e40d42759dd35';
const client_secret = '5578b2cf269a410ebb7ee79b68fff1ba';

async function getSpotifyToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

const spoty = axios.create({
    baseURL: 'https://api.spotify.com/v1/tracks/', // Corrected baseURL
    headers: {
        'Content-Type': 'application/json',
    },
});

spoty.interceptors.request.use(
    async config => {
        const token = await getSpotifyToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default spoty;
