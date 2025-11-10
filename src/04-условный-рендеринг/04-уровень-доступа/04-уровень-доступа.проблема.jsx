import './style.css';

function AccessLevel({ level }) {
    // Используйте несколько условий для отображения разных уровней доступа
    // level может быть: "admin", "user", "guest"
    // Используйте if/else if/else или несколько тернарных операторов
    
    // Вариант 1: if/else if/else
    // Вариант 2: тернарный с вложением
    
    // "admin" -> "🔑 Администратор - Полный доступ"
    // "user" -> "👤 Пользователь - Базовый доступ"
    // "guest" -> "👁️ Гость - Ограниченный доступ"
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


