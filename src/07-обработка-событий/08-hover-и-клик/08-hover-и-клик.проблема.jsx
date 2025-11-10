import './style.css';

function Card({ title, description }) {
    // Создайте обработчики:
    // handleMouseEnter - выводит в console.log: "Мышь над карточкой: {title}"
    // handleMouseLeave - выводит в console.log: "Мышь покинула карточку"
    // handleClick - показывает alert: "Вы открыли: {title}"
    
    return (
        <div 
            className="card"
            // Добавьте onMouseEnter={handleMouseEnter}
            // Добавьте onMouseLeave={handleMouseLeave}
            // Добавьте onClick={handleClick}
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function App() {
    const cards = [
        { id: 1, title: "React", description: "Библиотека для UI" },
        { id: 2, title: "Vue", description: "Прогрессивный фреймворк" },
        { id: 3, title: "Angular", description: "Платформа для веб-приложений" }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Множественные обработчики</h1>
            <p className="description">
                Один элемент может иметь несколько обработчиков событий. Откройте консоль!
            </p>
            
            <div className="cards">
                {cards.map(card => (
                    <Card 
                        key={card.id}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




