import './style.css';

function Button() {
    // Примите пропсы: onClick, children, variant
    // variant может быть: "primary", "success", "danger"
    
    return (
        <button 
            className={`btn btn-заменить_на_динамический_класс`}
            // Добавьте onClick={onClick}
        >
            {/* Выведите children */}
        </button>
    );
}

function App() {
    function handleSave() {
        alert("💾 Сохранено!");
    }
    
    function handleDelete() {
        alert("🗑️ Удалено!");
    }
    
    function handleCancel() {
        alert("❌ Отменено!");
    }
    
    return (
        <div className="container">
            <h1 className="title">Обработчики как пропсы</h1>
            <p className="description">
                Передавайте функции-обработчики дочерним компонентам через пропсы
            </p>
            
            <div className="buttons">
                {/* Передайте onClick и variant в каждую кнопку */}
                <Button>
                    Сохранить
                </Button>
                
                <Button>
                    Удалить
                </Button>
                
                <Button>
                    Отмена
                </Button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




