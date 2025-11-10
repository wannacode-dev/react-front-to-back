import './style.css';

function App() {
    function handleClick(e) {
        const buttonText = e.target.textContent;
        alert(`Вы нажали: ${buttonText}`);
    }
    
    return (
        <div className="container">
            <h1 className="title">Объект события (Event)</h1>
            <p className="description">
                Обработчик события автоматически получает объект события как первый параметр
            </p>
            
            <div className="buttons">
                <button onClick={handleClick} className="btn">🍕 Пицца</button>
                <button onClick={handleClick} className="btn">🍔 Бургер</button>
                <button onClick={handleClick} className="btn">🍣 Суши</button>
                <button onClick={handleClick} className="btn">🍝 Паста</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


