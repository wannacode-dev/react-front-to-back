import './style.css';

function TeamMember() {
    // Получите пропсы: name, role, avatar, bio
    
    return (
        <div className="team-member">
            <img 
                src={/* Используйте avatar */}
                alt={/* Используйте name */}
                className="member-avatar"
            />
            
            <h3 className="member-name">
                {/* Выведите name */}
            </h3>
            
            <p className="member-role">
                {/* Выведите role */}
            </p>
            
            <p className="member-bio">
                {/* Выведите bio */}
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="app">
            <h1 className="page-title">Наша команда</h1>
            
            <div className="team-grid">
                {/* Создайте 4 компонента TeamMember с разными данными */}
                {/* Передайте пропсы: name, role, avatar, bio */}
                {/* Используйте изображения: avatar.jpeg, avatar2.jpeg, avatar3.jpeg, avatar4.jpeg */}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


