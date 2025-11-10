import './style.css';

const { useState } = React;

function Calculator() {
    const [number, setNumber] = useState(0);
    
    function handleComplex() {
        setNumber(prev => prev + 5);
        setNumber(prev => prev * 2);
        setNumber(prev => prev + 10);
    }
    
    function handleReset() {
        setNumber(0);
    }
    
    return (
        <div className="calc-container">
            <h1 className="title">Множественные обновления</h1>
            <div className="description">
                (x + 5) * 2 + 10
            </div>
            <div className="number">{number}</div>
            <div className="buttons">
                <button onClick={handleComplex} className="btn btn-primary">
                    Применить формулу
                </button>
                <button onClick={handleReset} className="btn btn-secondary">
                    Сброс
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Calculator />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


