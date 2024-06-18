import React, { useRef, useState, useEffect } from 'react';

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
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <div
          className="mx-auto px-8 py-6 bg-white border text-black rounded-lg"
          style={{ 
            maxWidth: '70vw',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'  // Agregando sombra aquí
          }}
        >
          <h2 className="font-bold text-lg">About</h2>
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
          <button 
            onClick={handleToggle} 
            className="font-bold mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </section>
  );
}
 