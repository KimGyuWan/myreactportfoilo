import React from 'react';
import YouTube from 'react-youtube';
import './youtube.scss';

function Youtube() {
  document.cookie = "myCookie=cookieValue; SameSite=None; Secure";

  return (
    <>
      <YouTube
        videoId="uZb_Kdw_Y7A"
        opts={{
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            disablekb: 1,
            playlist: "uZb_Kdw_Y7A",
            loop: 1,
            muted: 1
          },
        }}
        onReady={(e) => { e.target.playVideo(); }}
      />
    </>
  )
}

export default Youtube
