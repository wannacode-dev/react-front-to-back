import './style.css';

function Logo() {
    return (
        <div className="logo">
            <span className="logo-icon">⚛️</span>
            <span className="logo-text">React App</span>
        </div>
    );
}

function NavLink() {
    return <a href="#" className="nav-link">Главная</a>;
}

function Navigation() {
    return (
        <nav className="navigation">
            <Logo />
            
            <div className="nav-links">
                <NavLink />
                <NavLink />
                <NavLink />
                <NavLink />
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




