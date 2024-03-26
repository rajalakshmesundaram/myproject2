import axios from "axios";
import { useState } from "react";

export const Shortenurl = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleShortenURL = async () => {
    try {
      const response = await axios.post('https://miniproject2-y876.onrender.com/api/shortenUrl', {
        originalURL,
      });
      setShortenedURL(response.data.shortenedURL);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="container mt-5">
      <input 
        type="text" 
        placeholder="Enter URL to shorten" 
        value={originalURL} 
        onChange={(e) => setOriginalURL(e.target.value)} 
      /><br/><br/>
      <button onClick={handleShortenURL}>Shorten URL</button>
      {shortenedURL && <p>Shortened URL: {shortenedURL}</p>}
    </div>
  );
};

export default Shortenurl;
