import './style.css';

function App() {
    // Создайте функцию handleClick
    // Она должна показывать alert с сообщением "Кнопка нажата!"
    
    return (
        <div className="container">
            <h1 className="title">Ваша первая интерактивная кнопка</h1>
            <p className="description">
                Добавьте обработчик события onClick к кнопке
            </p>
            
            <button className="btn">
                {/* Добавьте onClick={handleClick} */}
                Нажми меня!
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


