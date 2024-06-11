export async function fetchYouTubeVideoData(videoId) {
    const API_KEY = 'AIzaSyADYIZI5JyK5UUhsoW4qwiJUNBHHpIwfms';
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      //console.log('yt response', data); // This logs the whole response
      return data.items[0].snippet;
    } catch (error) {
      console.error('Error fetching YouTube video data:', error);
      return null; // Or handle the error as needed
    }
  }