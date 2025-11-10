import './style.css';

function App() {
    const names = ["Анна", "Иван", "Мария", "Дмитрий", "Елена"];
    
    return (
        <div className="container">
            <h1 className="title">Список участников</h1>
            
            <ul className="names-list">
                {names.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




