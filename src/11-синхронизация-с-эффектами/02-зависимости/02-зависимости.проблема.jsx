import './style.css';

const { useState, useEffect } = React;

function SearchLogger() {
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(0);
    
    // Создайте useEffect с массивом зависимостей:
    // - выводит в console.log: "Поиск:", query
    // - должен выполняться ТОЛЬКО при изменении query
    // - добавьте [query] в качестве второго аргумента
    // 
    // Попробуйте изменить count - эффект не сработает!
    
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


