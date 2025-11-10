import './style.css';

const { useState, useEffect } = React;

function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Компонент отрендерился! Count:", count);
    });
    
    return (
        <div className="counter-container">
            <h1 className="title">Первый эффект</h1>
            <div className="description">
                Откройте консоль и кликайте на кнопку!
            </div>
            <div className="count">{count}</div>
            <button onClick={() => setCount(count + 1)} className="btn">
                Увеличить
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Counter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




