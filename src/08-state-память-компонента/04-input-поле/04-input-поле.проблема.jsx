import React, { useState } from 'react';
 
import './style.css';

function GreetingForm() {
    // Создайте состояние name с пустой строкой ""
    
    // Создайте функцию handleChange, которая обновляет name
    // используя event.target.value
    
    return (
        <div className="form-container">
            <h1 className="title">Приветствие</h1>
            
            {/* Создайте input с типом text */}
            {/* value должен быть равен name */}
            {/* onChange должен вызывать handleChange */}
            {/* placeholder: "Введите ваше имя" */}
            
            {/* Если name не пустая строка, выведите приветствие: */}
            {/* "Привет, {name}! 👋" с классом "greeting" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <GreetingForm />
        </div>
    );
}

export default App;




