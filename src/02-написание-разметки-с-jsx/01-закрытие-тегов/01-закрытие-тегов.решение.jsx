import './style.css';

function Profile() {
    return (
        <div className="profile">
            <img src="avatar.jpeg" alt="Avatar" className="avatar" />
            
            <h2>Анна Смирнова</h2>
            
            <p>Frontend разработчик</p>
            
            <input type="text" placeholder="Email" className="input" />
            
            <p>Люблю React и создание красивых интерфейсов!</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Profile />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




