import './style.css';

const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);
    
    // Создайте функцию handleClick:
    // - вызывает setCount три раза подряд
    // - НО используйте функцию обновления: setCount(prev => prev + 1)
    // - это позволит увеличить счетчик на 3 за один клик!
    
    return (
        <div className="counter-container">
            <h1 className="title">Функция обновления</h1>
            <div className="description">
                Используйте prev =&gt; prev + 1 для работы с предыдущим значением
            </div>
            <div className="count">{count}</div>
            {/* Кнопка "Увеличить на 3" */}
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


