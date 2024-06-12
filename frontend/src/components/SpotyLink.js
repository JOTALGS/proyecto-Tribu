import React, { useEffect, useState } from 'react';
import spoty from '@/utils/spoty';

const SpotyTrack = ({ url }) => {
    const [trackData, setTrackData] = useState(null);
    const trackId = url.split('/').pop().split('?')[0];

    const whenMounted = async () => {
        try {
            const response = await spoty.get(`${trackId}`);
            console.log(response.data);
            setTrackData(response.data);
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        whenMounted();
    }, [url]);

    const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

    return (
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
            padding: '10px',
            maxHeight: '18vh',
        }}>
            {trackData ? (
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="220"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ borderRadius: '12px' }}
                ></iframe>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SpotyTrack;
