'use client'
import React from 'react';
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

  return (
    <div className="overflow-y-auto mx-auto mt-4 p-4" style={{ height: '65vh', width: '50vw' }}>
      <Post
        profilePic="https://via.placeholder.com/200x100"
        name="John Doe"
        body="This is the body of the post."
        attachment="https://via.placeholder.com/200x100"
      />
      {posts.map(post => (
        <div key={post.id} className="p-14 border bg-white border-gray-200 mb-2 rounded-lg">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;