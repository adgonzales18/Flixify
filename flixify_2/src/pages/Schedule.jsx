import React, { useState, useEffect } from 'react';
import './schedule.css';
import Card from '../components/Card';

function Schedule() {
  const [data, setData] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null); 

  const apiKey = import.meta.env.VITE_APP_API_KEY;

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
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
    fetchGenreList();
  }, []); 

  const filteredData = selectedGenre
    ? data.filter(movie => movie.genre_ids.includes(selectedGenre))
    : data;

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
            <ul className="filters">
              <li 
                onClick={() => setSelectedGenre(null)} 
                className={selectedGenre === null ? 'active' : ''}
              >
                All
              </li>
              {genreList.map(genre => (
                <li 
                  key={genre.id} 
                  onClick={() => setSelectedGenre(genre.id)}
                  className={selectedGenre === genre.id ? 'active' : ''}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="row mt-5">
            {filteredData.length > 0 ? (
              filteredData.map(movie => (
                <Card key={movie.id} movie={movie} genreList={genreList} />
              ))
            ) : (
              <p>No movies available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
