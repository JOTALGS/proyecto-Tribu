'use client'
import React from 'react';
import YouTubeVideo from './YtLink';
import SoundCloudTrack from './SoundCloudLink';
import SpotifyTrack from './SpotyLink';


const Post = ({ profilePic, name, body, attachment, link }) => {
  const isSoundCloud = link.includes('soundcloud.com');
  const isYouTube = link.includes('youtube.com');
  const isSpotify = link.includes('spotify.com');

  return (
    <div style={styles.postContainer}>
      <div style={styles.header}>
        <img src={profilePic} alt={`${name}'s profile`} style={styles.profilePic} />
        <span style={styles.name}>{name}</span>
      </div>
      <div style={styles.body}>{body}</div>

      {isYouTube && <YouTubeVideo url={link} />}
      {isSoundCloud && <SoundCloudTrack url={link} />}
      {isSpotify && <SpotifyTrack url={link} />}
      {!isYouTube && !isSoundCloud && !isSpotify && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p>{link}</p>
        </a>
      )}

      {attachment && <img src={attachment} alt="Attachment" style={styles.attachment} />}
      <div style={styles.footer}>

      </div>
    </div>
  );
};

const styles = {
  postContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '8px',
  },
  name: {
    fontWeight: 'bold',
  },
  body: {
    marginBottom: '8px',
  },
  attachment: {
    width: '100%',
    height: 'auto',
    marginBottom: '8px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Post;
