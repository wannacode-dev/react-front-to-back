import './style.css';

const { createContext, useContext, useState } = React;

// Создайте ThemeContext с defaultValue { theme: 'light', toggleTheme: () => {} }
const ThemeContext = createContext();

function ThemeToggle() {
    // Получите toggleTheme из context
    
    return (
        <button className="toggle-btn">
            Переключить тему
        </button>
    );
}

function Content() {
    // Получите theme из context
    
    return (
        <div className="content">
            <h1>Текущая тема: </h1>
            <ThemeToggle />
        </div>
    );
}

function App() {
    // Создайте state для theme
    // const [theme, setTheme] = useState('light');
    
    // Создайте функцию toggleTheme
    
    return (
        // Передайте в Provider объект { theme, toggleTheme }
        <div className="app">
            <Content />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


