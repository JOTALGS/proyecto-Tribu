'use client'
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const PostInput = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    console.log('event', content);
    setContent('');
  };

  const handleChange = (e) => {
    setContent(e.target.value); // Update the content state as the user types
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mx-auto mt-2" style={{ maxWidth: '90vw', width: '50vw' }}>
      <Form onSubmit={handleSubmit} className="flex flex-col">
        <div className="px-4 pt-2">
          <Form.Control 
            as="textarea" 
            value={content} 
            onChange={handleChange} 
            className="p-4 w-full bg-gray-100 rounded-lg" 
            placeholder="What are you thinking about?"
          />
        </div>

        <div className="px-4 pb-2 flex justify-between">
          <Button variant="outline-success text-white" className="text-white">Add Link</Button>
          <Button variant="outline-success text-white" className="text-white" type="submit">Post</Button>
        </div>
      </Form>
    </div>
  );
};

export default PostInput;
