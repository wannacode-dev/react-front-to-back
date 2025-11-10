import './style.css';

function Profile({ user }) {
    const isViewed = true;
    
    return (
        <div className="profile">
            <h3>{user.name}</h3>
            <p>Возраст: {user.age}</p>
            {isViewed && <p className="viewed">✓ Профиль просмотрен</p>}
        </div>
    );
}

function App() {
    const user = { name: "Анна Смирнова", age: 28 };
    
    return (
        <div className="container">
            <h1 className="title">Неизменяемость пропсов</h1>
            <p className="description">
                Никогда не изменяйте пропсы внутри компонента! Они должны быть только для чтения (read-only).
            </p>
            
            <div className="example good">
                <h2>✅ Правильный подход</h2>
                <Profile user={user} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

