'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function OffCanvas() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button onClick={toggleVisibility} className="fixed top-0 left-0 m-4 h-12 bg-blue-500 text-white px-4 py-2 rounded-lg z-10 bg-opacity-0" style={{ width: '18vw' }}>
      </button>
      {isVisible && (
        <div className="fixed top-20 inset-0 bg-gray-100 bg-opacity-80 z-50" style={{ width: '20vw' }}>
          <Navigation
            activeItemId=""
            onSelect={({ itemId }) => {
              if (itemId === '/home') {
                router.push(itemId);
              }
              if (itemId === '/profile') {
                router.push(itemId);
              }
            }}
            items={[
              {
                title: 'Home',
                itemId: '/home',
              },
              {
                title: 'Management',
                itemId: '/management',
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Profile',
                    itemId: '/profile',
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}

export default OffCanvas;
