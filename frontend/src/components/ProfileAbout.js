'use client'
import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ProfileAbout({ bio }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState('5vh');
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('5vh');
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className='mx-auto items-center'>
        <div className='mx-auto px-8 py-6 bg-green-800 border shadow-lg text-white' style={{ width: '70vw' }}>
          <h2 className='font-bold text-lg'>About</h2>
          <div
            style={{
              maxHeight: maxHeight,
              overflow: 'hidden',
              transition: 'max-height 0.5s ease-in-out',
            }}
            ref={contentRef}
          >
            <p>{bio}</p>
          </div>
          <button onClick={handleToggle} className='font-bold mt-1 p-2 bg-transparent hover:bg-white hover:bg-opacity-25 transition-colors duration-300'>
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </section>
  );
}
