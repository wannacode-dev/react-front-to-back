import './style.css';

const { useState, useEffect } = React;

function MountLogger() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Компонент монтирован!");
    }, []);
    
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


