import './style.css';

function Greeting() {
    // Верните заголовок h1 с текстом "Привет, React!"
    // Не забудьте использовать className="greeting" для стилизации
}

function App() {
    return (
        <div className="container">
            {/* Используйте компонент Greeting здесь */}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
