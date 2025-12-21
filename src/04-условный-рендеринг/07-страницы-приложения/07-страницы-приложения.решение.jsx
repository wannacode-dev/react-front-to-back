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
    const currentPage = "home";
    
    let pageComponent;
    
    if (currentPage === "home") {
        pageComponent = <HomePage />;
    } else if (currentPage === "profile") {
        pageComponent = <ProfilePage />;
    } else if (currentPage === "settings") {
        pageComponent = <SettingsPage />;
    }
    
    return (
        <div className="container">
            <nav className="navigation">
                <span className="nav-item">Главная</span>
                <span className="nav-item">Профиль</span>
                <span className="nav-item">Настройки</span>
            </nav>
            
            {pageComponent}
        </div>
    );
}

export default App;




