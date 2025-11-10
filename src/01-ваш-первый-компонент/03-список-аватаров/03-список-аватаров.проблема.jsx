import './style.css';

function Avatar() {
    // Компонент должен возвращать img с:
    // - src="avatar.jpeg"
    // - alt="User avatar"
    // - className="avatar"
}

function App() {
    return (
        <div className="app-container">
            <h1 className="title">Наша команда</h1>
            
            <div className="avatar-list">
                {/* Используйте компонент Avatar 5 раз */}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


