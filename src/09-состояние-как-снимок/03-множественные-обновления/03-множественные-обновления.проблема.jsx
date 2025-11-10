import './style.css';

const { useState } = React;

function Calculator() {
    const [number, setNumber] = useState(0);
    
    // Создайте функцию handleComplex:
    // - увеличивает number на 5 (используя функцию обновления)
    // - умножает на 2 (используя функцию обновления: prev => prev * 2)
    // - прибавляет 10 (используя функцию обновления)
    
    // Создайте функцию handleReset:
    // - устанавливает number в 0
    
    return (
        <div className="calc-container">
            <h1 className="title">Множественные обновления</h1>
            <div className="description">
                (x + 5) * 2 + 10
            </div>
            <div className="number">{number}</div>
            <div className="buttons">
                {/* Кнопка "Применить формулу" */}
                {/* Кнопка "Сброс" */}
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


