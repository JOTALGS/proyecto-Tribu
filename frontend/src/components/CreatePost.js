import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaLink, FaTimes } from 'react-icons/fa';

const PostInput = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      content,
      link,
    });
    setContent('');
    setLink('');
    setShowLinkInput(false);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddLinkClick = () => {
    setShowLinkInput(!showLinkInput);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: '#030712',
    borderColor: '#030712',
    borderRadius: '5px',
    padding: '0.5em 1em',
    color: '#e75480',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e75480',
    borderColor: '#e75480',
    color: '#030712',
  };

  return (
    <div
      className="bg-white border border-gray-300 rounded-lg mx-auto mt-2"
      style={{
        maxWidth: '90vw',
        width: '50vw',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins, Open Sans, sans-serif',
      }}
    >
      <Form onSubmit={handleSubmit} className="flex flex-col">
        <div className="px-4 py-2">
          <Form.Control
            as="textarea"
            value={content}
            onChange={handleChange}
            className="p-4 w-full bg-gray-100 border border-gray-300 rounded-t-lg"
            placeholder="What are you thinking about?"
            style={{
              borderRadius: '8px 8px 0 0',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {showLinkInput && (
          <div className="px-4 py-2">
            <Form.Control
              type="text"
              value={link}
              onChange={handleLinkChange}
              className="p-2 w-full bg-gray-100 border border-gray-300 rounded-lg"
              placeholder="Enter link here"
              style={{
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        )}

        <div className="px-4 pb-2 flex justify-between items-center">
          <Button
            variant="success"
            className="text-white"
            onClick={handleAddLinkClick}
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e75480')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#030712')}
          >
            {showLinkInput ? 'Close Link' : 'Add Link'}
          </Button>
          <Button
            variant="success"
            className="text-white"
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e75480')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#030712')}
          >
            Post
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PostInput;
