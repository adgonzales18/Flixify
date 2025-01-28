import React, {useState, useEffect} from 'react'
import './banner.css'
import MovieContent from '../components/MovieContent'
import MovieDate from '../components/MovieDate'


function Banner() {
  const [movies, setMovies] = useState([])

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const url =`https://api.themoviedb.org/3/move/popular?api_key=${apiKey}`;

  const fetchData = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setMovies(data.results))
    .catch(e=>console.log(e.message))
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="banner">
      <div className="movie">
        <img src="" alt="Background Image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent/>
            </div>
            <div className="col-lg-6 col-md-12">
              <MovieDate/>
              <div className="trailer d-flex align-items-center justify-content-center active">
                <a href="" className="playBtn"><ion-icon name="play-outline"></ion-icon></a>
                <p>Watch Trailer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}
export default Banner