// components/YouTubeVideo.js
import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideoData } from '../utils/youtube';

const YouTubeVideo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    async function getVideoData() {
      const data = await fetchYouTubeVideoData(videoId);
      setVideoData(data);
    }

    getVideoData();
  }, [videoId]);

  if (!videoData) return <p>Loading...</p>;

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className='text-black'>
      <div>
        <img src={videoData.thumbnails.medium.url} alt={videoData.title} />
        <h3>{videoData.title}</h3>
        <p>{videoData.channelTitle}</p>
      </div>
    </a>
  );
};

export default YouTubeVideo;
