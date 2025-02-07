import React from 'react';
import './trendCard.css';

function TrendCard({ slide }) {
  // Fallback image in case poster_path is missing
  const fallbackImage = 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="trend-card">
      <img
        src={slide.poster_path ? `https://image.tmdb.org/t/p/w500${slide.poster_path}` : fallbackImage}
        alt={slide.title || 'Movie Poster'}
        className="img-fluid"
      />
      <a href="#">
        Add to calendar <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );
}

export default TrendCard;
