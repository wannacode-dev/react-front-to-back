import './style.css';

const { createContext, useContext } = React;

const ThemeContext = createContext('light');

function Header() {
    const theme = useContext(ThemeContext);
    
    return (
        <header className={`header ${theme}`}>
            Header (Theme: {theme})
        </header>
    );
}

function Main() {
    const theme = useContext(ThemeContext);
    
    return (
        <main className={`main ${theme}`}>
            Main Content (Theme: {theme})
        </main>
    );
}

function Footer() {
    const theme = useContext(ThemeContext);
    
    return (
        <footer className={`footer ${theme}`}>
            Footer (Theme: {theme})
        </footer>
    );
}

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




