import React from 'react'
import './card.css'

function Card({movie}) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Preview Image" className="img-fluid"/>
            <p>{movie.release_date}</p>
            <div className="content">
              <h4>{movie.title}</h4>
              <div className="card-icons">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="play-outline"></ion-icon>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card