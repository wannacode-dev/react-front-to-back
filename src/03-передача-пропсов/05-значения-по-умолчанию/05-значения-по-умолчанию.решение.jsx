import './style.css';

function Button({ text = "Кнопка", color = "blue", size = "medium" }) {
    return (
        <button 
            className={`btn btn-${color} btn-${size}`}
        >
            {text}
        </button>
    );
}

function App() {
    return (
        <div className="container">
            <h2 className="title">Кнопки с разными пропсами</h2>
            
            <div className="button-group">
                <Button text="Отправить" color="purple" size="large" />
                
                <Button text="Сохранить" />
                
                <Button />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




