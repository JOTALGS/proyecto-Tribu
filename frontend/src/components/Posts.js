'use client'
import React from 'react';

const Post = ({ profilePic, name, body, attachment }) => {
  return (
    <div style={styles.postContainer}>
      <div style={styles.header}>
        <img src={profilePic} alt={`${name}'s profile`} style={styles.profilePic} />
        <span style={styles.name}>{name}</span>
      </div>
      <div style={styles.body}>{body}</div>
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
