import './style.css';

function App() {
    function handleParentClick() {
        alert("Клик по родителю (div)");
    }
    
    // Создайте handleChildClick, который:
    // 1. Принимает event
    // 2. Вызывает event.stopPropagation() чтобы остановить всплытие
    // 3. Показывает alert: "Клик по кнопке (событие не всплывёт)"
    
    return (
        <div className="container">
            <h1 className="title">event.stopPropagation()</h1>
            <p className="description">
                Используйте stopPropagation() чтобы остановить всплытие события к родителям
            </p>
            
            <div className="demo">
                {/* Этот div реагирует на клик */}
                <div onClick={handleParentClick} className="parent">
                    <p>Родительский div (кликабельный)</p>
                    
                    {/* Добавьте onClick={handleChildClick} */}
                    {/* С stopPropagation событие не дойдёт до родителя */}
                    <button className="child">
                        Кнопка (с stopPropagation)
                    </button>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


