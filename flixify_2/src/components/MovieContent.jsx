import React from 'react'
import './movieContent.css';
import Button from './Button';


function MovieContent({movie, genreList}) {
  const getGenreNames = () => {
    if (!genreList || !genreList.length || !movie.genre_ids) return [];
    return movie.genre_ids.map((genreId) => {
      const genre = genreList.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    });
  };


  const genreNames = getGenreNames();

  const contentType = movie?.media_type === 'movie' ? 'Movie' : movie?.media_type === 'tv' ? 'TV Series' : 'Unknown';
  
  return (
    <div className="content active">
      <h1 className="movie-title">{movie.title || movie.name}</h1>
      <h4>
        <span>{contentType}</span>
        <span><i>{movie.original_language}</i></span>
        <span>Rating: {Math.ceil(movie.vote_average)}</span>
        <span>{genreNames.join(', ')}</span>
      </h4>
      <p>{movie.overview}</p>
      <div className="button">
       <Button 
          icon={<ion-icon name="bookmark-outline"></ion-icon>} 
          name='Bookmark' 
          color='#ff3700' 
          bgColor='#ffffff'
        />
        <Button 
        icon={<ion-icon name="add-outline"></ion-icon>}
        name='My List'      
        />
      </div>
    </div>
  )
}

export default MovieContent