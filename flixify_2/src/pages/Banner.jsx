import React, {useState, useEffect} from 'react'
import './banner.css'

function Banner() {
  const [movies, setMovies] = useState([])

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const url =`https://api.themoviedb.org/3/move/popular?api_key=${apiKey}`;

  const fetchData = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setMovies(data))
    .catch(e=>console.log(e.message))
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="banner">
      <div className="movie">
        <img src="" alt="Background Image" className="bgImg" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <img src="" alt="Movie Title" className="movie-title" />
                <h4>c
                  <span>Year</span>
                  <span><i>age</i></span>
                  <span>length</span>
                  <span>category</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Expedita, deleniti exercitationem, odit id, quisquam laudantium 
                    aliquam voluptatum consequatur eum eos quae animi dolores placeat 
                    neque ad sed dolore quas voluptatibus suscipit esse obcaecati quo! 
                    Beatae est, voluptatem temporibus aspernatur quas consequatur 
                    incidunt sunt totam sit doloremque laudantium id fugiat nostrum.
                  </p>
                  <div className="button">
                    Button
                  </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">

            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Banner