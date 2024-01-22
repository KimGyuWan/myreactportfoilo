import React, { useEffect } from 'react';
import './openchat.scss'

function Openchat() {
  useEffect(() => {
    const loadKakaoSDK = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadKakaoSDK().then(() => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(`${process.env.REACT_APP_KAKAO_OPENCHAT_KEY}`);
      }

      window.Kakao.Channel.createChatButton({
        container: '#kakao-talk-channel-chat-button',
        channelPublicId: '_lcFBG',
        title: 'consult',
        size: 'small',
        color: 'yellow',
        shape: 'pc',
        supportMultipleDensities: true,
      });
    }).catch(err => console.error(err));
  }, []);

  return (
    <div className='d-block d-lg-none' id="kakao-talk-channel-chat-button"></div>
  );
}

export default Openchat;

// import React, { useEffect } from 'react'

// function Openchat() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     try {
//       if (window.Kakao) {
//         const kakao = window.Kakao;
//         if (!kakao.isInitialized()) {
//           kakao.init(`${process.env.REACT_APP_KAKAO_OPENCHAT_KEY}`);
//         }
//       }

//       window.Kakao.Channel.createChatButton({
//         container: '#kakao-talk-channel-chat-button',
//         channelPublicId: '_lcFBG',
//         title: 'consult',
//         size: 'small',
//         color: 'yellow',
//         shape: 'pc',
//         supportMultipleDensities: true,
//       });
//       document.body.appendChild(script);
//       document.body.removeChild(script);
//     } catch (err) { }
//   }, [])
//   return (
//     <div id="kakao-talk-channel-chat-button"></div>
//   )
// }

// export default Openchat


