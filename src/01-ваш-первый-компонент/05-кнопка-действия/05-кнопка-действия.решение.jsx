import './style.css';

function ActionButton() {
    const emoji = "🚀";
    const text = "Запустить";
    
    return (
        <button className="action-button">
            <span className="button-emoji">{emoji}</span>
            <span className="button-text">{text}</span>
        </button>
    );
}

function App() {
    return (
        <div className="app-container">
            <h2 className="title">Панель управления</h2>
            
            <div className="button-group">
                <ActionButton />
                <ActionButton />
                <ActionButton />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


