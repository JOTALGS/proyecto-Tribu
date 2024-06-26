'use client'
import React, { useEffect, useState } from 'react';
import Post from './Posts';
import api from '@/utils/api';
import PostInput from '@/components/CreatePost';

const PostContainer = () => {
  const [allPosts, setPosts] = useState([]);

  const whenMounted = async () => {
    try {
      const response = await api.get(`api/posts/`);
      setPosts(response.data.posts);
      console.log('posts', response.data.posts);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const handleChildData = async (data) => {
    console.log('Data from child:', data);

    try {
      const response = await api.post('api/create/', data); // Use the latest form data
      console.log('response', response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    whenMounted();
    const style = document.createElement('style');
    style.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .post-container > div:not(:last-child) {
        margin-bottom: 10px; /* Espacio entre cada post */
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra entre cada post */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-y-auto mx-auto mt-2 px-4 hide-scrollbar post-container" style={{ height: '100vh', width: '50vw' }}>
      <PostInput onSubmit={handleChildData} />
      {allPosts.map(post => (
        <Post 
          key={post.id}
          profilePic="https://via.placeholder.com/200x100"
          name={post.created_by.username}
          body={post.body}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default PostContainer;
