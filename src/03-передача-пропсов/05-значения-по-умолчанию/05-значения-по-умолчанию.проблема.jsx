import './style.css';

function Button({ text, color, size }) {
    // Установите значения по умолчанию прямо в деструктуризации
    // Например: function Button({ text = "Кнопка", color = "blue", size = "medium" })
    // Если пропс не передан, будет использовано значение по умолчанию
    
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
                {/* Эта кнопка получит все пропсы */}
                <Button text="Отправить" color="purple" size="large" />
                
                {/* Эта кнопка получит только text, остальные будут по умолчанию */}
                <Button text="Сохранить" />
                
                {/* Эта кнопка вообще без пропсов - все значения по умолчанию */}
                <Button />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


