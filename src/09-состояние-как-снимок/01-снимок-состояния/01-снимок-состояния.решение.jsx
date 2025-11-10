import './style.css';

const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        console.log('До обновления:', count);
        setCount(count + 1);
        console.log('После обновления:', count); // count не изменился!
    }
    
    return (
        <div className="counter-container">
            <h1 className="title">Снимок состояния</h1>
            <div className="description">
                State - это снимок! Он не меняется во время рендера.
            </div>
            <div className="count">{count}</div>
            <button onClick={handleClick} className="btn">
                Увеличить и вывести
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


