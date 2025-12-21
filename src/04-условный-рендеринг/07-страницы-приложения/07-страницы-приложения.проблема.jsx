import React from 'react';
 
import './style.css';

function HomePage() {
    return (
        <div className="page">
            <h2>🏠 Главная страница</h2>
            <p>Добро пожаловать на главную страницу!</p>
        </div>
    );
}

function ProfilePage() {
    return (
        <div className="page">
            <h2>👤 Профиль</h2>
            <p>Здесь отображается ваш профиль.</p>
        </div>
    );
}

function SettingsPage() {
    return (
        <div className="page">
            <h2>⚙️ Настройки</h2>
            <p>Настройте приложение под себя.</p>
        </div>
    );
}

function App() {
    const currentPage = "home"; // Может быть: "home", "profile", "settings"
    
    // Условно отображайте компонент в зависимости от currentPage
    // Используйте if/else или тернарный оператор
    // Создайте функцию или переменную, которая возвращает нужный компонент
    
    return (
        <div className="container">
            <nav className="navigation">
                <span className="nav-item">Главная</span>
                <span className="nav-item">Профиль</span>
                <span className="nav-item">Настройки</span>
            </nav>
            
            {/* Отобразите компонент страницы здесь */}
        </div>
    );
}

export default App;




