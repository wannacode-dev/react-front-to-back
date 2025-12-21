import React, { useState } from 'react';
 
import './style.css';

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

export default App;




