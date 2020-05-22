import React from 'react'
import VideosItem from './VideosItem'

const VideoList = ({ videos,onSelectedVideo }) => {

  const renderedList = videos.map(video => {
    return (
      <VideosItem
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo}
        video={video}
      />
    )
  })

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}

export default VideoList
