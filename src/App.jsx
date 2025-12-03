import { useState } from 'react'
import './index.css'

function App() {
  return (
    <div className="container">
      <div className="hero-video-container">
        <video 
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

      <div className="action-section">
        <h1>create your own six-seven brainrot.</h1>

        <div className="upload-card">
          <div className="upload-area">
            <div className="drop-zone">
              Drop images here
            </div>
          </div>
          
          <div className="upload-actions">
            <button className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              Choose Photo/Video
            </button>
            
            <div className="divider">or</div>
            
            <button className="btn-secondary">
              Paste image or URL
            </button>
            
            <div className="footer-options">
              <div className="footer-item">
                <div className="icon-box" style={{ background: '#bcaaa4' }}>
                  <span style={{ fontSize: '1.5rem' }}>🐶</span>
                </div>
                <span>Meme Gen</span>
              </div>
              <div className="footer-item">
                <div className="icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <span>My Uploads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
