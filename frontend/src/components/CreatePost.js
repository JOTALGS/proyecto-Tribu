import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const PostInput = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      "content": content,
      "link": link
    });
    setContent('');
    setLink('');
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddLinkClick = () => {
    if (showLinkInput) {
      setShowLinkInput(false);
    } else {
      setShowLinkInput(true);
    }
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg mx-auto mt-2" style={{ maxWidth: '90vw', width: '50vw', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Form onSubmit={handleSubmit} className="flex flex-col">
        <div className="px-4 py-2">
          <Form.Control 
            as="textarea" 
            value={content} 
            onChange={handleChange} 
            className="p-4 w-full bg-gray-100 rounded-lg" 
            placeholder="What are you thinking about?"
          />
        </div>

        {showLinkInput && (
          <div className="px-4 py-2">
            <Form.Control 
              type="text" 
              value={link} 
              onChange={handleLinkChange} 
              className="p-2 w-full bg-gray-100 rounded-lg" 
              placeholder="Enter link here"
            />
          </div>
        )}

        <div className="px-4 pb-2 flex justify-between">
          <Button variant="outline-success" className="bg-green-500" onClick={handleAddLinkClick}>
            {showLinkInput ? 'Close Link' : 'Add Link'}
          </Button>
          <Button variant="outline-success" className="bg-green-500" type="submit">Post</Button>
        </div>
      </Form>
    </div>
  );
};

export default PostInput;
