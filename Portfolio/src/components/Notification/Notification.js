import React from 'react';
import './Notification.css';

function Notification() {
  return (
    <div className="moving-text-container">
      <div className="moving-text">
        <a href='https://simplesnippets.netlify.app/' target="_blank" rel="noopener noreferrer">
          <span className="rainbow-text">New!</span> <span style={{color:'white'}}>Check out My latest Work</span>
        </a>
      </div>
    </div>
  );
}

export default Notification;
