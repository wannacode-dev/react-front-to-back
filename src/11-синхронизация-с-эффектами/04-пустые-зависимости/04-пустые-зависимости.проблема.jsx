import './style.css';

const { useState, useEffect } = React;

function MountLogger() {
    const [count, setCount] = useState(0);
    
    // Создайте useEffect с ПУСТЫМ массивом зависимостей []:
    // - выводит в console.log: "Компонент монтирован!"
    // - этот эффект выполнится ТОЛЬКО ОДИН РАЗ при монтировании
    // - попробуйте кликнуть на кнопку - эффект не сработает!
    
    return (
        <div className="logger-container">
            <h1 className="title">Пустой массив зависимостей</h1>
            <div className="description">
                Эффект выполняется только при монтировании
            </div>
            <div className="count">{count}</div>
            <button onClick={() => setCount(count + 1)} className="btn">
                Увеличить
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <MountLogger />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


