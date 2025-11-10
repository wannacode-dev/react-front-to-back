import './style.css';

const { useState, useEffect } = React;

function SearchLogger() {
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Поиск:", query);
    }, [query]);
    
    return (
        <div className="logger-container">
            <h1 className="title">Зависимости эффекта</h1>
            <div className="description">
                Эффект выполняется только при изменении query
            </div>
            
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск..."
                className="input"
            />
            
            <div className="counter">
                Count: {count}
                <button onClick={() => setCount(count + 1)} className="btn-small">
                    +1
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <SearchLogger />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


