'use client'
import React, { useState } from 'react';

export default function ProfileAbout({tabSelected}) {

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div>
        <p>{tabSelected}</p>
      </div>
    </section>
  );
}