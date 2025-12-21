import React from 'react';
 
import './style.css';

function MovieCard() {
    const movieTitle = "Интерстеллар";
    const director = "Кристофер Нолан";
    const year = 2014;
    const rating = 8.6;
    
    return (
        <div className="movie-card">
            <div className="movie-poster">🎬</div>
            
            <h2 className="movie-title">
                {movieTitle}
            </h2>
            
            <p className="movie-info">
                Режиссер: {director}
            </p>
            
            <p className="movie-info">
                Год: {year}
            </p>
            
            <div className="movie-rating">
                ⭐ Рейтинг: {rating}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <MovieCard />
        </div>
    );
}

export default App;




