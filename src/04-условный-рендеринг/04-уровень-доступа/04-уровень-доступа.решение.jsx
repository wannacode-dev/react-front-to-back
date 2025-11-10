import './style.css';

function AccessLevel({ level }) {
    if (level === "admin") {
        return <p className="access-text admin">🔑 Администратор - Полный доступ</p>;
    } else if (level === "user") {
        return <p className="access-text user">👤 Пользователь - Базовый доступ</p>;
    } else {
        return <p className="access-text guest">👁️ Гость - Ограниченный доступ</p>;
    }
}

function UserCard({ name, level }) {
    return (
        <div className="user-card">
            <div className="user-icon">
                {level === "admin" && "🔑"}
                {level === "user" && "👤"}
                {level === "guest" && "👁️"}
            </div>
            
            <h3 className="user-name">{name}</h3>
            
            <AccessLevel level={level} />
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="page-title">Система управления доступом</h1>
            
            <div className="users-grid">
                <UserCard name="Алексей Иванов" level="admin" />
                <UserCard name="Мария Петрова" level="user" />
                <UserCard name="Гость" level="guest" />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




