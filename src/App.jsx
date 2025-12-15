import { useState, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/statue.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default App
