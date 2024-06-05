'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function OffCanvas() {
  const router = useRouter();


  return (
    <div className="relative">
        <div className="fixed top-20 inset-0 bg-gray-100 bg-opacity-80 z-50" style={{ width: '14vw' }}>
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
    </div>
  );
}

export default OffCanvas;
