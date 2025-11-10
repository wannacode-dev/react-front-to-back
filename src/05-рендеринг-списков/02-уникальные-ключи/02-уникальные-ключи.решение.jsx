import './style.css';

function App() {
    const users = [
        { id: 1, name: "Анна Смирнова", age: 28 },
        { id: 2, name: "Иван Петров", age: 32 },
        { id: 3, name: "Мария Козлова", age: 25 },
        { id: 4, name: "Дмитрий Иванов", age: 30 }
    ];
    
    return (
        <div className="container">
            <h1 className="title">База пользователей</h1>
            
            <div className="users-list">
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p>Возраст: {user.age} лет</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


