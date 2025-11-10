import './style.css';

const { useState } = React;

function BatchingDemo() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    
    function handleClick() {
        setCount(count + 1);
        setFlag(!flag);
        setCount(prev => prev + 1);
    }
    
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
            
            <button onClick={handleClick} className="btn">
                Обновить все
            </button>
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




