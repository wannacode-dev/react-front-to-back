import React from 'react';
 
import './style.css';

function UserCard() {
    // Получите пропсы: name, role, city
    
    return (
        <div className="user-card">
            <div className="avatar">👤</div>
            
            <h2 className="name">
                {/* Выведите имя пользователя */}
            </h2>
            
            <p className="role">
                {/* Выведите роль */}
            </p>
            
            <p className="location">
                📍 {/* Выведите город */}
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            {/* Передайте пропсы: name="Анна Петрова", role="Frontend разработчик", city="Москва" */}
            <UserCard />
        </div>
    );
}

export default App;




