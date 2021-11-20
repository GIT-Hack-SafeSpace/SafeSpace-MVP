import React from 'react'
import ReactPlayer from 'react-player'
import InspirationImage from './InspirationImage'

export default function InspoMedia({ media }) {
  return (
    <div>
      {
        media.type === "image" ? (
          <InspirationImage key={media.id} image={media} />
        ) : (
          <ReactPlayer
            key={media.id}
            url={media.media_url}
            controls={true}
            pip={true}
            width="100%"
            height="200px"
            style={{ backgroundColor: "black", margin: "5px 0" }}
          />
        )
      }
    </div>
  )
}
