// components/YouTubeVideo.js
import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideoData } from '../utils/youtube';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ url }) => {
  const [videoData, setVideoData] = useState(null);
  const [videoId, setVideoId] = useState();
  const [isPlayable, setIsPlayable] = useState(true); // Flag to indicate if video is playable

  useEffect(() => {
    var videoId = extractVideoId(url);
    setVideoId(videoId)
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

  const truncatedTitle = videoData.title.length > 50 ? videoData.title.substring(0, 50) + '...' : videoData.title;

  return (
    <div style={{
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
      fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
      fontWeight: '100',
    }}>
      <MiniPlayer videoId={videoId} />
      <div style={{ marginLeft: '20px' }}>
        <a href={url} target="_blank" rel="noopener noreferrer" className='text-black'>
          <div>
            <img
              src={videoData.thumbnails.medium.url}
              alt={videoData.title}
              height="100"
              width="100"
            />
            <h3 style={{ fontSize: '15px'}}>{truncatedTitle}</h3>
            <p>{videoData.channelTitle}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

const MiniPlayer = ({ videoId }) => {
  const opts = {
    height: '150',
    width: '250',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
