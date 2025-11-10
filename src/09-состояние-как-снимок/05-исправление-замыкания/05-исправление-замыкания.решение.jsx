import './style.css';

const { useState } = React;

function FixedCounter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setTimeout(() => {
            setCount(prev => prev + 1); // Исправлено!
        }, 3000);
    }
    
    return (
        <div className="counter-container">
            <h1 className="title">Исправленное замыкание</h1>
            <div className="description">
                Используйте функцию обновления для исправления бага!
            </div>
            <div className="count">{count}</div>
            <button onClick={handleClick} className="btn">
                Увеличить через 3 сек
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <FixedCounter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




