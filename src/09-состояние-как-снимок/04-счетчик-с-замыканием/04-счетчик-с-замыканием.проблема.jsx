import './style.css';

const { useState } = React;

function DelayedCounter() {
    const [count, setCount] = useState(0);
    
    // Создайте функцию handleClick:
    // - использует setTimeout с задержкой 3000ms (3 секунды)
    // - внутри setTimeout увеличивает count: setCount(count + 1)
    // 
    // Попробуйте кликнуть 3 раза БЫСТРО, не дожидаясь задержки
    // Что произошло? Почему count увеличился только на 1, а не на 3?
    // Это баг замыкания - count "заморожен" в момент клика!
    
    return (
        <div className="counter-container">
            <h1 className="title">Баг с замыканием</h1>
            <div className="description">
                Кликните 3 раза быстро и посмотрите что произойдет через 3 секунды
            </div>
            <div className="count">{count}</div>
            {/* Кнопка "Увеличить через 3 сек" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <DelayedCounter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




