'use client'
import React from 'react';
import YouTubeVideo from './YtLink';
import SoundCloudTrack from './SoundCloudLink';


const Post = ({ profilePic, name, body, attachment }) => {
  const soundCloudUrl = 'https://soundcloud.com/trommelmusic/premiere-a2-jyoel-dreams-jnjs-remix-mateltd003?si=d5d09a8d4c494d318ca5ab57c909dcde&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

  return (
    <div style={styles.postContainer}>
      <div style={styles.header}>
        <img src={profilePic} alt={`${name}'s profile`} style={styles.profilePic} />
        <span style={styles.name}>{name}</span>
      </div>
      <div style={styles.body}>{body}</div>
      <YouTubeVideo videoId={'n8QurABRsqE'}/>
      <SoundCloudTrack url={soundCloudUrl} />
      
      {attachment && <img src={attachment} alt="Attachment" style={styles.attachment} />}
      <div style={styles.footer}>
        <button style={styles.button}>Like</button>
        <button style={styles.button}>Comments</button>
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
