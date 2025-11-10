import './style.css';

function App() {
    function handleParentClick() {
        alert("Клик по родителю (div)");
    }
    
    function handleChildClick(e) {
        e.stopPropagation();
        alert("Клик по кнопке (событие не всплывёт)");
    }
    
    return (
        <div className="container">
            <h1 className="title">event.stopPropagation()</h1>
            <p className="description">
                Используйте stopPropagation() чтобы остановить всплытие события к родителям
            </p>
            
            <div className="demo">
                <div onClick={handleParentClick} className="parent">
                    <p>Родительский div (кликабельный)</p>
                    
                    <button onClick={handleChildClick} className="child">
                        Кнопка (с stopPropagation)
                    </button>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


