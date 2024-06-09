import React, {useState, useEffect }from 'react'
import './banner.css'
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import WatchTrailer from '../components/WatchTrailer';
import MovieCarousel from '../components/MovieCarousel';

export default function Banner() {
  const [movies , setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBackdropPath, setSelectedBackdropPath] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genreList, setGenreList] = useState([]);

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const url =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  
  const fetchGenreList = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
      const data = await response.json();
      setGenreList(data.genres);
    } catch (error) {
      console.error('Error fetching genre list:', error);
    }
  };

  const fetchData = () => {
    fetch(url)
    .then((res) =>res.json())
    .then((data) => {
      setMovies(data.results);
      setLoading(false);
      if (data.results.length > 0) {
        setSelectedBackdropPath(data.results[0].backdrop_path);
        setSelectedMovie(data.results[0]);
      }

    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
    fetchGenreList();
  }, []);

  const handleSlideChange = (backdropPath, movie) => {
    setSelectedBackdropPath(backdropPath);
    setSelectedMovie(movie);
    
  }
  return (
    <div className="banner">
    {loading ? (
      <p>Loading....</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <>
        <div className="movie">
          <img src={`https://image.tmdb.org/t/p/original${selectedBackdropPath}`} alt="Background Image" className={`bgImg ${selectedMovie && selectedMovie.backdrop_path === selectedBackdropPath ? 'active' : ''}`}/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                {selectedMovie && <MovieContent movie={selectedMovie} genreList={genreList} />}
              </div>
              <div className="col-lg-6 col-md-12">
                {selectedMovie && <MovieDate />}
                {selectedMovie && <WatchTrailer />}
              </div>
            </div>
          </div>
        </div>
        <MovieCarousel slides={movies} slideChange={handleSlideChange}/>
      </>
    )}
  </div>
  )};