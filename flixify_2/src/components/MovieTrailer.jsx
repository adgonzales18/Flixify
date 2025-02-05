import React, {useState, useRef} from 'react'
import './movieTrailer.css'
import Modal from './Modal'

function MovieTrailer({movie, swiperRef}) {

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal);

    if (swiperRef.current) {
      const swiperInstance = swiperRef.current;

      if (modal) {
        // Restart autoplay when modal is closed
        swiperInstance.autoplay.start();
        console.log("Autoplay restarted after closing trailer");
      } else {
        // Stop autoplay when modal is opened
        swiperInstance.autoplay.stop();
        console.log("Autoplay stopped due to trailer click");
      }
    }
  }

  console.log("Movie video URL: ", movie.video); // Log the video URL to ensure it exists

  return (
    <>
     <div className= {`trailer d-flex align-items-center justify-content-center active ${movie.active ? 'active' : undefined}`}>
     <a href="#" className="playBtn" onClick={toggleModal}><ion-icon name="play-outline"></ion-icon></a>
     <p>Watch Trailer</p>
     </div>
     {movie && <Modal movie={movie} status={modal} toggleModal={toggleModal} />}
    </>
  )
}

export default MovieTrailer