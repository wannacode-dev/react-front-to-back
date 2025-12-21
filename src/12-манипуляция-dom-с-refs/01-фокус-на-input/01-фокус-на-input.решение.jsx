import React, { useRef } from 'react';
 
import './style.css';

function SearchForm() {
    const inputRef = useRef(null);
    
    function handleFocus() {
        inputRef.current.focus();
    }
    
    return (
        <div className="form-container">
            <h1 className="title">Фокус на input</h1>
            
            <input 
                ref={inputRef}
                type="text"
                placeholder="Поиск..."
                className="input"
            />
            
            <button onClick={handleFocus} className="btn">
                Сфокусировать
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <SearchForm />
        </div>
    );
}

export default App;




