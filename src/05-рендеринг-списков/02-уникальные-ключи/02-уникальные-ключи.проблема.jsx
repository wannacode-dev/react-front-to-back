import './style.css';

function App() {
    const users = [
        { id: 1, name: "Анна Смирнова", age: 28 },
        { id: 2, name: "Иван Петров", age: 32 },
        { id: 3, name: "Мария Козлова", age: 25 },
        { id: 4, name: "Дмитрий Иванов", age: 30 }
    ];
    
    // При рендеринге списков ВСЕГДА добавляйте атрибут key
    // key должен быть уникальным для каждого элемента
    // Используйте id из объекта: key={user.id}
    // НЕ используйте индекс массива как key (это плохая практика)!
    
    return (
        <div className="container">
            <h1 className="title">База пользователей</h1>
            
            <div className="users-list">
                {users.map(user => (
                    <div className="user-card">
                        {/* ВАЖНО: добавьте key={user.id} */}
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


