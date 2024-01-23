import React from 'react';
import YouTube from 'react-youtube';
import './youtube.scss';
import { Marginbottom } from './style/Commonui'

function Youtube() {
  // document.cookie = "myCookie=cookieValue; SameSite=None; Secure";

  return (
    <Marginbottom>
      <div className='youtubeiframe'>
        <YouTube
          videoId="uZb_Kdw_Y7A"
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
              disablekb: 1,
              playlist: "uZb_Kdw_Y7A",
              loop: 1,
              muted: 1
            },
          }}
          onReady={(e) => { e.target.playVideo(); e.target.mute(); }}
        />
      </div>
    </Marginbottom>
  )
}

export default Youtube
