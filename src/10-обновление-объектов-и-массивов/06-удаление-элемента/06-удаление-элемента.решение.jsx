import React, { useState } from 'react';
 
import './style.css';

function ItemRemover() {
    const [items, setItems] = useState([
        'Хлеб',
        'Молоко',
        'Яйца',
        'Сыр',
        'Масло'
    ]);
    
    function handleRemove(index) {
        setItems(items.filter((_, i) => i !== index));
    }
    
    return (
        <div className="remover-container">
            <h1 className="title">Список покупок</h1>
            
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <span>{item}</span>
                        <button 
                            onClick={() => handleRemove(index)}
                            className="remove-btn"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
            
            {items.length === 0 && (
                <div className="empty">Все куплено! 🎉</div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ItemRemover />
        </div>
    );
}

export default App;




