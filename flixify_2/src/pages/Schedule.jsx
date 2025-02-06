import React, { useState, useEffect } from 'react';
import './schedule.css';

function Schedule() {
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        console.log('API response:', data.results); // Log the actual data
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array, this will run once on mount

  return (
    <div>
      <section id="schedule" className="schedule">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Opening this week</h4>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="filters">
              <p>Filters</p>
            </div>
          </div>
          <div className="row mt-5">
            {data.length > 0 ? (
              data.map(movie => (
                <Card key={movie.id} movie={movie} />
              ))
            ) : (
              <p>No movies available</p> // Optional message if no data is present
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
