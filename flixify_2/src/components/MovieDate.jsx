import React from 'react'
import './movieDate.css'


function MovieDate({movie}) {
  const formatReleaseDate = (releaseDateStr) => {
    const releaseDate = new Date(releaseDateStr);
    const day = releaseDate.getDate();
    const month = releaseDate.toLocaleString('default', {month: 'long'});
    
    const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    return `${day}${suffix} ${month}`;

  }
  return (
    <div className="date active">
        <h2>
        <p>{movie.release_date ? formatReleaseDate(movie.release_date) : 'N/A'}</p>
        </h2>
    </div>
  )
}

export default MovieDate