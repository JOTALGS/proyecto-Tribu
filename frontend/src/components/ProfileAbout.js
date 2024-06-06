'use client'
import React, { useRef, useState } from 'react';
import Head from 'next/head';

export default function ProfileAbout({bio}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <div className='mx-auto items-center'>
          <div className='mx-auto px-8 py-6 bg-green-800 border shadow-lg text-white' style={{ width: '70vw'}}>
            <h2 className='font-bold text-lg'>About</h2>
            <div style={{
                maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : '5vh',
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