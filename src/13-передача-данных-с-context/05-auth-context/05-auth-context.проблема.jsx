import './style.css';

const { createContext, useContext, useState } = React;

const AuthContext = createContext();

function LoginForm() {
    const [username, setUsername] = useState('');
    const { login } = useContext(AuthContext);
    
    function handleSubmit(e) {
        e.preventDefault();
        if (username.trim()) {
            login(username);
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Вход в систему</h2>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите имя"
                className="input"
            />
            <button type="submit" className="btn">
                Войти
            </button>
        </form>
    );
}

function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    
    return (
        <div className="dashboard">
            <h2>Добро пожаловать, {user}!</h2>
            <p>Вы успешно вошли в систему</p>
            <button onClick={logout} className="btn btn-logout">
                Выйти
            </button>
        </div>
    );
}

function App() {
    // Создайте state:
    // - user (null если не залогинен, имя если залогинен)
    
    // Создайте функции:
    // - login(username) - устанавливает user
    // - logout() - очищает user (null)
    
    return (
        // Оберните в AuthContext.Provider
        // Передайте { user, login, logout }
        <div className="container">
            {/* Если user, показать Dashboard, иначе LoginForm */}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




