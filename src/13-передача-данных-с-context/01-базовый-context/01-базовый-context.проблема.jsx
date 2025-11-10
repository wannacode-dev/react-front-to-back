import './style.css';

const { createContext, useContext } = React;

// Создайте Context:
// const ThemeContext = createContext('light');

function Header() {
    // Получите theme из context:
    // const theme = useContext(ThemeContext);
    
    return (
        <header className="header">
            Header
        </header>
    );
}

function Main() {
    // const theme = useContext(ThemeContext);
    
    return (
        <main className="main">
            Main Content
        </main>
    );
}

function Footer() {
    // const theme = useContext(ThemeContext);
    
    return (
        <footer className="footer">
            Footer
        </footer>
    );
}

function App() {
    return (
        // Оберните компоненты в ThemeContext.Provider
        // Передайте value="dark"
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




