import './style.css';

const { useState } = React;

function FixedCounter() {
    const [count, setCount] = useState(0);
    
    // Создайте функцию handleClick:
    // - используйте setTimeout с задержкой 3000ms
    // - внутри setTimeout используйте функцию обновления
    // - setCount(prev => prev + 1)
    // 
    // Теперь кликните 3 раза быстро!
    // Результат: count увеличится на 3! Баг исправлен! ✅
    
    return (
        <div className="counter-container">
            <h1 className="title">Исправленное замыкание</h1>
            <div className="description">
                Используйте функцию обновления для исправления бага!
            </div>
            <div className="count">{count}</div>
            {/* Кнопка "Увеличить через 3 сек" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <FixedCounter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




