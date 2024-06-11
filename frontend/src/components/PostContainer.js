'use client'
import React, { useEffect, useState } from 'react';
import Post from './Posts';
import api from '@/utils/api'


const PostContainer = () => {
  // Hardcoded posts for demonstration
  const [allPosts, setPosts] = useState([]);



  const whenMounted = async () => {
    try {
      const response = await api.get(`api/posts/`)
      setPosts(response.data.posts)
      console.log('posts', response.data.posts)
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }

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
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-y-auto mx-auto mt-2 px-4 hide-scrollbar" style={{ height: '65vh', width: '50vw' }}>
      {allPosts.map(post => (
        <Post 
          key={post.id}
          profilePic="https://via.placeholder.com/200x100"
          name={post.created_by.username}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default PostContainer;