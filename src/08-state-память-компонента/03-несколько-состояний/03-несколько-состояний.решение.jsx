import React, { useState } from 'react';
 
import './style.css';

function StatsCard() {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [shares, setShares] = useState(0);
    
    return (
        <div className="card">
            <h1 className="title">Статистика поста</h1>
            
            <div className="stats">
                <div className="stat">
                    <div className="icon">❤️</div>
                    <div className="count">{likes}</div>
                    <button onClick={() => setLikes(likes + 1)} className="btn">
                        +1
                    </button>
                </div>
                
                <div className="stat">
                    <div className="icon">💬</div>
                    <div className="count">{comments}</div>
                    <button onClick={() => setComments(comments + 1)} className="btn">
                        +1
                    </button>
                </div>
                
                <div className="stat">
                    <div className="icon">🔄</div>
                    <div className="count">{shares}</div>
                    <button onClick={() => setShares(shares + 1)} className="btn">
                        +1
                    </button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <StatsCard />
        </div>
    );
}

export default App;




