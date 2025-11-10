import './style.css';

const { createContext, useContext, useState } = React;

// Создайте два Context:
// const UserContext = createContext();
// const ThemeContext = createContext();

function UserInfo() {
    // Получите user из UserContext
    // Получите theme из ThemeContext
    
    return (
        <div className="user-info">
            <h2>User: </h2>
            <p>Theme: </p>
        </div>
    );
}

function App() {
    const [user, setUser] = useState({ name: 'Иван', role: 'Admin' });
    const [theme, setTheme] = useState('light');
    
    return (
        // Оберните в оба Provider (можно вложенно)
        <div className="app">
            <UserInfo />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


