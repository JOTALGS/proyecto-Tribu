'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function OffCanvas({id}) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('/home');

  useEffect(() => {
    // Sync activeItem with the current path
    setActiveItem(window.location.pathname);
  }, []);

  const handleSelect = ({ itemId }) => {
    if (itemId === '/profile') {
      router.push(`/profile/${id}`);
    } else {
      router.push(itemId);
    }
    setActiveItem(itemId);
  };

  return (
    <div className="">
      <div className="z-50" style={{ width: '20vw', maxHeight: '7vw', background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8))' }}>
        <div style={{ 
          borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
          borderTop: '1px solid rgba(255, 255, 255, 0.5)',
        }}>
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
              {
                title: 'Settings',
                itemId: '/settings',
                elemId: 'settingsNav',
              },
            ]}
            overrides={{
              Nav: {
                component: (props) => (
                  <nav {...props} />
                ),
              },
              Item: {
                component: (props) => {
                  const isActive = props.itemId === activeItem;
                  return (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        backgroundColor: isActive ? '#34D399' : 'transparent',
                        color: isActive ? '#FFFFFF' : '#000000',
                        borderRadius: isActive ? '5px' : '0',
                        padding: '10px',
                        cursor: 'pointer',
                      }}
                    >
                      {props.title}
                    </div>
                  );
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
