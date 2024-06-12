import React from 'react';

const BackgroundImages = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="/bk1.jpg"
        alt="Background Image 1"
        className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 animate-bg1"
      />
      <img
        src="/bk2.jpg"
        alt="Background Image 2"
        className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 animate-bg2"
      />
    </div>
  );
};

export default BackgroundImages;
