import React from 'react'
import ReactPlayer from 'react-player'
import "./styles/VideoPlayerStyle.css"

function VideoPlayerComponent({url}) {
  return (
    <ReactPlayer
      url={url}
    />
  )
}

export default VideoPlayerComponent;
