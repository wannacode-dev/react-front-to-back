import React from 'react';
 
import './style.css';

function Button({ onClick, children, variant = "primary" }) {
    return (
        <button 
            className={`btn btn-${variant}`}
            onClick={onClick}
        >
            {children}
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
                <Button onClick={handleSave} variant="success">
                    Сохранить
                </Button>
                
                <Button onClick={handleDelete} variant="danger">
                    Удалить
                </Button>
                
                <Button onClick={handleCancel} variant="primary">
                    Отмена
                </Button>
            </div>
        </div>
    );
}

export default App;




