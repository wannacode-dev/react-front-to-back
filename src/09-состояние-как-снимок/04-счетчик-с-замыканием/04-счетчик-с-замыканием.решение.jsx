import './style.css';

const { useState } = React;

function DelayedCounter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setTimeout(() => {
            setCount(count + 1); // Баг! count "заморожен"
        }, 3000);
    }
    
    return (
        <div className="counter-container">
            <h1 className="title">Баг с замыканием</h1>
            <div className="description">
                Кликните 3 раза быстро и посмотрите что произойдет через 3 секунды
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
            <DelayedCounter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


