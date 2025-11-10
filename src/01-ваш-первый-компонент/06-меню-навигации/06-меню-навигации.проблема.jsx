import './style.css';

function Logo() {
    // Верните div с классом "logo" содержащий:
    // - span с текстом "⚛️" и классом "logo-icon"
    // - span с текстом "React App" и классом "logo-text"
}

function NavLink() {
    // Верните a с классом "nav-link" и href="#" содержащий текст "Главная"
}

function Navigation() {
    return (
        <nav className="navigation">
            {/* Добавьте компонент Logo */}
            
            <div className="nav-links">
                {/* Добавьте 4 компонента NavLink */}
            </div>
        </nav>
    );
}

function App() {
    return (
        <div className="app-container">
            <Navigation />
            
            <div className="content">
                <h1>Добро пожаловать!</h1>
                <p>Это страница с навигационным меню</p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




