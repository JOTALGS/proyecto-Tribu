// components/YouTubeVideo.js
import React, { useEffect, useState } from 'react';

const SoundCloudTrack = () => {
  
	const url = 'https://soundcloud.com/trommelmusic/premiere-a2-jyoel-dreams-jnjs-remix-mateltd003?si=bec0907f818e40e78a1baafb38046c39&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

  return (
    <>

    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1382384686&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div
    style={{
    fontSize: '10px',
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily:
        'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
    fontWeight: '100',
    }}
    ><a href="https://soundcloud.com/taleofus" title="Tale Of Us" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Tale Of Us</a> · <a href="https://soundcloud.com/taleofus/afterlife-voyage-001" title="Afterlife Voyage 001" target="_blank" styles={{ color: '#cccccc', textDecoration: 'none' }}>Afterlife Voyage 001</a></div>
    </>
  );
};

export default SoundCloudTrack;
