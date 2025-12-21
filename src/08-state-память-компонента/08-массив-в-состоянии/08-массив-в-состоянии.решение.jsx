import React, { useState } from 'react';
 
import './style.css';

function FruitList() {
    const [fruits] = useState(['Яблоко', 'Банан', 'Апельсин']);
    
    return (
        <div className="list-container">
            <h1 className="title">Список фруктов</h1>
            
            <ul className="fruit-list">
                {fruits.map((fruit, index) => (
                    <li key={index} className="fruit-item">
                        {fruit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <FruitList />
        </div>
    );
}

export default App;




