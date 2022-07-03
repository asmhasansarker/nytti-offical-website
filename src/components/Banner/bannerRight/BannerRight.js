import React from 'react';
import YouTube from 'react-youtube';

class BannerRight extends React.Component {
  render() {
    const opts = {
      height: '290',
      width: '500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const youtubeStyle = {
      border: "2px",
      radius: "10px"

    }

    return <YouTube videoId="aqz-KE-bpKQ" opts={opts} style={youtubeStyle} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}



// import React from 'react'


// const BannerRight = () => {

//   return (
//     <div>This is Banner Right</div>
//   )
// }

export default BannerRight