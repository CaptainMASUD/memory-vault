import React from 'react';

function BackgroundVideo() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;