'use client';
import React, { useRef, useState, useEffect } from 'react';
import PastWorkCard from './PastWorkCard';

export default function MyWork({ pastWork }) {
  // asegurar de que pastWork es un arreglo
  if (!Array.isArray(pastWork)) {
    pastWork = [];
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setHasOverflow(containerRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <section className="bg-white py-8">
      <div className='container mx-auto'>
        <div
          className='mx-auto px-8 py-6 bg-white border text-black rounded-lg'
          style={{ 
            maxWidth: '70vw',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' // Sombra similar
          }}
        >
          <h2 className='font-bold text-lg'>All my work</h2>
          <div
            style={{
              maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : '37vh',
              overflow: 'hidden',
              transition: 'max-height 0.5s ease-in-out',
              position: 'relative',
            }}
            ref={contentRef}
          >
            {hasOverflow && (
              <button
                onClick={scrollLeft}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white border-none rounded-full w-8 h-8 flex items-center justify-center'
              >
                &#9664;
              </button>
            )}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                overflowX: 'scroll',
                scrollBehavior: 'smooth',
                whiteSpace: 'nowrap',
                paddingBottom: '1rem',
                msOverflowStyle: 'none', // IE and Edge
                scrollbarWidth: 'none', // Firefox
              }}
              ref={containerRef}
              className="hide-scrollbar"
            >
              {pastWork.map((work, index) => (
                <div key={index} style={{ flex: '0 0 auto', width: 'calc(33.33% - 1rem)', minWidth: '200px' }}>
                  <PastWorkCard work={work} />
                </div>
              ))}
            </div>
            {hasOverflow && (
              <button
                onClick={scrollRight}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white border-none rounded-full w-8 h-8 flex items-center justify-center'
              >
                &#9654;
              </button>
            )}
          </div>
          <button
            onClick={handleToggle}
            className="w-full px-4 py-2 font-bold text-white rounded-lg 
            bg-gray-900 transition-all duration-900 
            hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800
            focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </section>
  );
}
