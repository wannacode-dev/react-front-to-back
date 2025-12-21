import React from 'react';
 
import './style.css';

function MovieCard() {
    const movieTitle = "Интерстеллар";
    const director = "Кристофер Нолан";
    const year = 2014;
    const rating = 8.6;
    
    // Используйте фигурные скобки {} чтобы вывести значения переменных в JSX
    // Пример: <p>{movieTitle}</p>
    
    return (
        <div className="movie-card">
            <div className="movie-poster">🎬</div>
            
            <h2 className="movie-title">
                {/* Выведите название фильма здесь */}
            </h2>
            
            <p className="movie-info">
                Режиссер: {/* Выведите режиссера */}
            </p>
            
            <p className="movie-info">
                Год: {/* Выведите год */}
            </p>
            
            <div className="movie-rating">
                ⭐ Рейтинг: {/* Выведите рейтинг */}
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




