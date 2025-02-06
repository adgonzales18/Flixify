import React from 'react'
import './card.css'

function Card({movie, genreList}) {

  const formatReleaseDate = (releaseDateStr) => {
    const releaseDate = new Date(releaseDateStr);
    const day = releaseDate.getDate();
    const month = releaseDate.toLocaleString('default', {month: 'long'});
    
    const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    return `${day}${suffix} ${month}`;

  }
  const getGenreNames = () => {
    if (!genreList || !genreList.length || !movie.genre_ids) return [];
    return movie.genre_ids.map((genreId) => {
      const genre = genreList.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    }).slice(0,2);
  };

  const genreNames = getGenreNames();
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Preview Image" className="img-fluid"/>
              <p>{movie.release_date ? formatReleaseDate(movie.release_date) : 'N/A'} | {genreNames.join(', ')} </p>
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