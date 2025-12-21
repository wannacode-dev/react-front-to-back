import React, { useState } from 'react';
 
import './style.css';

function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }
    
    return (
        <div className="counter-container">
            <h1 className="title">Функция обновления</h1>
            <div className="description">
                Используйте prev =&gt; prev + 1 для работы с предыдущим значением
            </div>
            <div className="count">{count}</div>
            <button onClick={handleClick} className="btn">
                Увеличить на 3
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




