import React from 'react'
import './watchTrailer.css'
function WatchTrailer() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
        <a href="" className="playButton">
        <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
    </div>
  )
}

export default WatchTrailer