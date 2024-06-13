import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideoData } from '../utils/youtube';
import YouTube from 'react-youtube';

const YtLink = ({ url, short }) => {
  const [videoData, setVideoData] = useState(null);
  const [videoId, setVideoId] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoId = extractVideoId(url);
    console.log('yt id ', videoId, 'short', short)
    setVideoId(videoId);
    if (videoId) {
      async function getVideoData() {
        const data = await fetchYouTubeVideoData(videoId);
        setVideoData(data);
      }
      getVideoData();
    }
  }, [url]);

  const extractVideoId = (url) => {
    if (short) {
      const regex = /(?:\?v=|\/embed\/|\/1watch\?v=|\/\d\/|\/|^)([a-zA-Z0-9_-]{11})/;
      const matches = url.match(regex);
      return matches ? matches[1] : null;
    } else {
      const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/*.be\/|embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(videoIdRegex);
      return match ? match[1] : null;
    }    
  };

  if (!videoData) return <p>Loading...</p>;

  const truncatedTitle = videoData.title.length > 50 ? videoData.title.substring(0, 50) + '...' : videoData.title;
  const playerWidth = isPlaying ? '400px' : '250px';

  return (
    <div className='rounded-sm' style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ccc',
      padding: '10px',
      maxHeight: '18vh',
      overflow: 'hidden',
      margin: '10px',
      backgroundColor: '#cccccc',
      fontSize: '15px',
      backgroundColor: 'rgba(204, 204, 204, 0.3)', // 0.7 is the transparency level
      lineBreak: 'anywhere',
      wordBreak: 'normal',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontFamily: 'Tahoma, sans-serif',
      fontWeight: '100',
    }}>
      <div id="miniPlayer" style={{ transition: 'width 1s', width: playerWidth, }}>
        <YouTube videoId={videoId} opts={{ height: '150', width: '100%' }} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <a href={url} target="_blank" rel="noopener noreferrer" className='text-black' style={{ textDecoration: 'none' }}>
          <div>
            <img className='rounded-lg mb-2'
              src={videoData.thumbnails.medium.url}
              alt={videoData.title}
              height="100"
              width="100"
            />
            <h3 style={{ fontSize: '15px', fontWeight: 'bold'}}>{truncatedTitle}</h3>
            <p >{videoData.channelTitle}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default YtLink;
