// components/YouTubeVideo.js
import React, { useEffect, useState } from 'react';

const SoundCloudTrack = ({url}) => {

  const trackIdRegex = /tracks\/(\d+)/;
  const match = url.match(trackIdRegex);
  const trackId = match ? match[1] : '';

  console.log(trackId)

  return (
    <>
    <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=0066cc`}
    ></iframe>
    <div style={{
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
        fontWeight: '100',
        padding: '10px'
    }}>
    </div>
    </>
  );
};

export default SoundCloudTrack;
