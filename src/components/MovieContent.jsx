import React from 'react'
import './movieContent.css'
import Button from './Button'

function formatReleaseDate(releaseDateStr) {
  const releaseDate = new Date(releaseDateStr);

  // Get month and year from the Date object
  const month = releaseDate.toLocaleString('default', { month: 'long' });
  const year = releaseDate.getFullYear(); 

  // Return formatted string
  return `${month} ${year}`;
}
function MovieContent({movie, genreList}) {
  const getGenreNames = () => {
    if (!genreList || !genreList.length || !movie.genre_ids) return [];
    return movie.genre_ids.map((genreId) => {
      const genre = genreList.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    });
  };

  const genreNames = getGenreNames();
  return (
     <div className='content active col-12'>
     <h1 className="movie-title">{movie.title}</h1>
        <h4>
            <span>{formatReleaseDate(movie.release_date)}</span>
            <span><i>{movie.original_language}</i></span>
            <span>{Math.ceil(movie.vote_average)}</span>
            <span>{genreNames.join(', ')}</span>
        </h4>
        <p>{movie.overview}</p>
        <div className="button">
            <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book' color='#ff3700' bgColor='#ffffff' />
            <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My List' />
        </div>
     </div>
  )
}

export default MovieContent