import './style.css';

const { useState } = React;

function Counter() {
    // Создайте состояние count с начальным значением 0
    // используя useState
    
    // Создайте функцию handleClick, которая увеличивает count на 1
    
    return (
        <div className="counter">
            <h1 className="title">Счетчик</h1>
            {/* Выведите текущее значение count с классом "count" */}
            {/* Добавьте кнопку с текстом "Увеличить" */}
            {/* При клике на кнопку вызывайте handleClick */}
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




