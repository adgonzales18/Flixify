import React from 'react'
import './movieContent.css';

function MovieContent() {
  return (
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
  )
}

export default MovieContent