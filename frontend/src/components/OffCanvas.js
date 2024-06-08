'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function OffCanvas() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('/home');

  const handleSelect = ({ itemId }) => {
    router.push(itemId);
    setActiveItem(itemId);
  };

  return (
    <div className="relative">
      <div className="fixed top-20 inset-0 bg-gray-100 bg-opacity-80 z-50" style={{ width: '14vw' }}>
        <Navigation
          activeItemId={activeItem}
          onSelect={handleSelect}
          items={[
            {
              title: 'Home',
              itemId: '/home',
              elemId: 'homeNav',
            },
            {
              title: 'Profile',
              itemId: '/profile',
              elemId: 'profileNav',
            },
          ]}
          onItemClick={({ itemId }) => setActiveItem(itemId)} // Set active item directly on click
          overrides={{
            Item: {
              component: (props) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    backgroundColor: props.itemId === activeItem ? '#34D399' : 'transparent',
                  }}
                />
              ),
            },
          }}
        />
      </div>
    </div>
  );
}

export default OffCanvas;
