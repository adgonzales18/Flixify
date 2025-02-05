import React, {useState, useEffect, useRef} from 'react'
import './banner.css'
import MovieContent from '../components/MovieContent'
import MovieDate from '../components/MovieDate'
import MovieTrailer from '../components/MovieTrailer'
import MovieCarousel from '../components/MovieCarousel'


function Banner() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovieData, setSelectedMovieData] =useState({
    backdropPath: '',
    movie: null,
  });

  const [genreList, setGenreList] = useState([]);
  const [hasUserSelectedMovie, setHasUserSelectedMovie] = useState(false);

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const url =`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  const swiperRef = useRef(null); 
  
  const fetchGenreList = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
      const data = await response.json();
      setGenreList(data.genres);
    } catch (error) {
      console.error('Error fetching genre list:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const moviesWithVideos = await Promise.all(
        data.results.map(async (movie) => {
          const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`);
          const videoData = await videoResponse.json();
  
          // Look for a trailer (YouTube video)
          const trailer = videoData.results.find(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
          );
  
          // If a trailer is found, add it to the movie
          if (trailer) {
            return {
              ...movie,
              video: `https://www.youtube.com/embed/${trailer.key}`,
            };
          } else {
            return null; // Return null if no trailer is found
          }
        })
      );
  
      // Filter out movies that don't have a trailer
      const filteredMovies = moviesWithVideos.filter((movie) => movie !== null);
  
      setMovies(filteredMovies);
      setLoading(false);
  
      if (filteredMovies.length > 0 && !selectedMovieData.movie) {
        const initialMovie = filteredMovies[0];
        setSelectedMovieData({
          backdropPath: initialMovie.backdrop_path,
          movie: initialMovie,
        });
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  
  
  useEffect(() => {
    fetchData();
    fetchGenreList();
  }, []);

  const handleSlideChange = (backdropPath, movie) => {
    if (movie) {
      setHasUserSelectedMovie(true); 
      setSelectedMovieData({
        backdropPath,
        movie,
      });
    }
  };

  const handleAutoplayStart = () => {
    setHasUserSelectedMovie(false);
  }
  return (
    <div className="banner">
      {loading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>Error: {error} </p>
      ) : (
      <>
        <div className="movie">
          <img src={`https://image.tmdb.org/t/p/original${selectedMovieData.backdropPath}`} alt="Background Image" className={`bgImg ${selectedMovieData.backdropPath ? 'active' : ''}`} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                {hasUserSelectedMovie && selectedMovieData.movie ? (
                  <MovieContent key={selectedMovieData.movie.id} movie={selectedMovieData.movie} genreList={genreList} />
                ) : ( <p>Select a movie content to view</p> )}</div>
              <div className="col-lg-6 col-md-12">
                {hasUserSelectedMovie && selectedMovieData.movie && <MovieDate movie={selectedMovieData.movie} />}
                {hasUserSelectedMovie && selectedMovieData.movie && <MovieTrailer movie={selectedMovieData.movie} swiperRef={swiperRef} />}
              </div>
            </div>
            <div className="carousel-wrapper">
              <MovieCarousel slides={movies} slideChange={handleSlideChange} autoplayStart={handleAutoplayStart} hasUserSelectedMovie={hasUserSelectedMovie} swiperRef={swiperRef} />
            </div>
          </div>
        </div>
        </>
    )}
    </div>
  )
}
export default Banner