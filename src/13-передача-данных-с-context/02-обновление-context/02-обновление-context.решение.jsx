import React, { createContext, useContext, useState } from 'react';
 
import './style.css';

const ThemeContext = createContext();

function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    
    return (
        <button onClick={toggleTheme} className="toggle-btn">
            Переключить тему
        </button>
    );
}

function Content() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`content ${theme}`}>
            <h1>Текущая тема: {theme}</h1>
            <ThemeToggle />
        </div>
    );
}

function App() {
    const [theme, setTheme] = useState('light');
    
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${theme}`}>
                <Content />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;




