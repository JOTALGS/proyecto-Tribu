'use client'
import React, { useEffect } from 'react';
import Post from './Posts';

const PostContainer = () => {
  // Hardcoded posts for demonstration
  const posts = [
    { id: 1, content: 'Post 1 content' },
    { id: 2, content: 'Post 2 content' },
    { id: 3, content: 'Post 3 content' },
    { id: 4, content: 'Post 4 content' },
    { id: 5, content: 'Post 5 content' },
    { id: 6, content: 'Post 6 content' },
    { id: 7, content: 'Post 7 content' },
    { id: 8, content: 'Post 8 content' },
    { id: 9, content: 'Post 9 content' },
    { id: 10, content: 'Post 10 content' },
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-y-auto mx-auto mt-4 p-4 hide-scrollbar" style={{ height: '65vh', width: '50vw' }}>
      {posts.map(post => (
        <Post 
          key={post.id}
          profilePic="https://via.placeholder.com/200x100"
          name="John Doe"
          body={post.content}
          attachment="https://via.placeholder.com/200x100"
        />
      ))}
    </div>
  );
};

export default PostContainer;