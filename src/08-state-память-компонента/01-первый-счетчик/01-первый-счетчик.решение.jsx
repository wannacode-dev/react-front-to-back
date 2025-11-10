import './style.css';

const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }
    
    return (
        <div className="counter">
            <h1 className="title">Счетчик</h1>
            <div className="count">{count}</div>
            <button onClick={handleClick} className="btn">
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


