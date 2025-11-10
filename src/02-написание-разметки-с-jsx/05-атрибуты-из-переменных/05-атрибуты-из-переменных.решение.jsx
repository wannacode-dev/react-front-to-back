import './style.css';

function UserCard() {
    const userName = "Елена Иванова";
    const userAvatar = "avatar2.jpeg";
    const userRole = "UI/UX Designer";
    const portfolioLink = "https://portfolio.example.com";
    const imageAlt = "Фото профиля";
    
    return (
        <div className="user-card">
            <img 
                src={userAvatar}
                alt={imageAlt}
                className="user-avatar"
            />
            
            <h2 className="user-name">
                {userName}
            </h2>
            
            <p className="user-role">
                {userRole}
            </p>
            
            <a 
                href={portfolioLink}
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


