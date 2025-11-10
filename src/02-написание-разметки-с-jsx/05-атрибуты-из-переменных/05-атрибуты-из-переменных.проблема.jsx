import './style.css';

function UserCard() {
    const userName = "Елена Иванова";
    const userAvatar = "avatar2.jpeg";
    const userRole = "UI/UX Designer";
    const portfolioLink = "https://portfolio.example.com";
    const imageAlt = "Фото профиля";
    
    // Используйте переменные в атрибутах через фигурные скобки {}
    // Например: src={переменная}, href={переменная}, alt={переменная}
    
    return (
        <div className="user-card">
            <img 
                src="замените_на_переменную_userAvatar"
                alt="замените_на_переменную_imageAlt"
                className="user-avatar"
            />
            
            <h2 className="user-name">
                {/* Выведите имя пользователя */}
            </h2>
            
            <p className="user-role">
                {/* Выведите роль пользователя */}
            </p>
            
            <a 
                href="замените_на_переменную_portfolioLink"
                className="portfolio-link"
            >
                Посмотреть портфолио
            </a>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <UserCard />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


