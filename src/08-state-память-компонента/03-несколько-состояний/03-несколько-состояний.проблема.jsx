import './style.css';

const { useState } = React;

function StatsCard() {
    // Создайте три независимых состояния:
    // likes с начальным значением 0
    // comments с начальным значением 0
    // shares с начальным значением 0
    
    return (
        <div className="card">
            <h1 className="title">Статистика поста</h1>
            
            <div className="stats">
                <div className="stat">
                    <div className="icon">❤️</div>
                    {/* Выведите количество likes */}
                    {/* Добавьте кнопку "+1" которая увеличивает likes */}
                </div>
                
                <div className="stat">
                    <div className="icon">💬</div>
                    {/* Выведите количество comments */}
                    {/* Добавьте кнопку "+1" которая увеличивает comments */}
                </div>
                
                <div className="stat">
                    <div className="icon">🔄</div>
                    {/* Выведите количество shares */}
                    {/* Добавьте кнопку "+1" которая увеличивает shares */}
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


