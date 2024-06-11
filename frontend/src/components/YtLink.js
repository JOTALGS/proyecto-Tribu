// components/YouTubeVideo.js
import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideoData } from '../utils/youtube';

const YouTubeVideo = ({ url }) => {
  const [videoData, setVideoData] = useState(null);
  

  useEffect(() => {
    const videoId = extractVideoId(url);
    console.log('yt vid id', videoId)
    if (videoId) {
      async function getVideoData() {
        const data = await fetchYouTubeVideoData(videoId);
        setVideoData(data);
      }
      getVideoData();
    }
  }, [url]);

  const extractVideoId = (url) => {
    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/*.be\/|embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  if (!videoData) return <p>Loading...</p>;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='text-black'>
      <div>
        <img src={videoData.thumbnails.medium.url} alt={videoData.title} />
        <h3>{videoData.title}</h3>
        <p>{videoData.channelTitle}</p>
      </div>
    </a>
  );
};

export default YouTubeVideo;
