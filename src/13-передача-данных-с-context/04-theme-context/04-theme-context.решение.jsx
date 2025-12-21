import React, { createContext, useContext, useState } from 'react';
 
import './style.css';

const ThemeContext = createContext();

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <header className={`header ${theme}`}>
            <h1>Мое приложение</h1>
            <button onClick={toggleTheme} className="theme-btn">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </header>
    );
}

function Card({ title, text }) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`card ${theme}`}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

function App() {
    const [theme, setTheme] = useState('light');
    
    function toggleTheme() {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${theme}`}>
                <Header />
                <main className="main">
                    <Card title="Карточка 1" text="Контент первой карточки" />
                    <Card title="Карточка 2" text="Контент второй карточки" />
                    <Card title="Карточка 3" text="Контент третьей карточки" />
                </main>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;




