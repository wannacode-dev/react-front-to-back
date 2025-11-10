import './style.css';

const { useState } = React;

function BatchingDemo() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    
    // Создайте функцию handleClick:
    // - вызывает setCount(count + 1)
    // - вызывает setFlag(!flag)
    // - вызывает setCount(prev => prev + 1)
    // - выводит в console.log "Рендер!"
    // 
    // Кликните и посмотрите в консоль
    // Сколько раз вывелся "Рендер!"? Один раз!
    // React "батчит" (группирует) обновления для производительности
    
    console.log('Рендер!');
    
    return (
        <div className="batch-container">
            <h1 className="title">Батчинг обновлений</h1>
            <div className="description">
                React группирует обновления в один рендер
            </div>
            
            <div className="stats">
                <div className="stat">
                    <div className="label">Count:</div>
                    <div className="value">{count}</div>
                </div>
                <div className="stat">
                    <div className="label">Flag:</div>
                    <div className="value">{flag ? '✓' : '✗'}</div>
                </div>
            </div>
            
            {/* Кнопка "Обновить все" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <BatchingDemo />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


