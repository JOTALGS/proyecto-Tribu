'use client'
import React, { useState } from 'react';


const PostInput = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    console.log('event', content)
    setContent('');
  };

  const handleChange = (e) => {
    setContent(e.target.value); // Update the content state as the user types
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mx-auto mt-5" style={{ width: '50vw' }}>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="px-4 pt-2">  
                <textarea value={content} onChange={handleChange}  className="p-4 w-full bg-gray-100 rounded-lg" placeholder="What are you thinking about?"></textarea>
            </div>

            <div className="px-4 pb-2 flex justify-between">
                <a href="#" className="inline-block py-2 px-6 bg-gray-600 text-white rounded-lg">Add Link</a>

                <button className="inline-block py-2 px-6 bg-lime-700 text-white rounded-lg">Post</button>
            </div>
        </form>
    </div>
  );
};

export default PostInput;
