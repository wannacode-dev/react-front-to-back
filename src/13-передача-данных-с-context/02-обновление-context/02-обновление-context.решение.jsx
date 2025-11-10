import './style.css';

const { createContext, useContext, useState } = React;

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




