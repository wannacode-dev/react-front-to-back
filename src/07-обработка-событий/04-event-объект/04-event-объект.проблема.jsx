import './style.css';

function App() {
    // Создайте handleClick, который:
    // 1. Принимает параметр event (или e)
    // 2. Получает текст кнопки через event.target.textContent
    // 3. Показывает alert с текстом: "Вы нажали: {текст кнопки}"
    
    return (
        <div className="container">
            <h1 className="title">Объект события (Event)</h1>
            <p className="description">
                Обработчик события автоматически получает объект события как первый параметр
            </p>
            
            <div className="buttons">
                {/* Добавьте onClick={handleClick} ко всем кнопкам */}
                <button className="btn">🍕 Пицца</button>
                <button className="btn">🍔 Бургер</button>
                <button className="btn">🍣 Суши</button>
                <button className="btn">🍝 Паста</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


