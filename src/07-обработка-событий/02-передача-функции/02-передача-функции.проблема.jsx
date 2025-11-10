import './style.css';

function App() {
    function showSuccess() {
        alert("✅ Успешно!");
    }
    
    function showWarning() {
        alert("⚠️ Внимание!");
    }
    
    function showError() {
        alert("❌ Ошибка!");
    }
    
    return (
        <div className="container">
            <h1 className="title">Правильная передача обработчиков</h1>
            <p className="description">
                ❌ ПЛОХО: onClick={"{showSuccess()}"} - функция вызовется сразу при рендеринге!<br/>
                ✅ ХОРОШО: onClick={"{showSuccess}"} - функция передаётся как ссылка
            </p>
            
            <div className="buttons">
                {/* ИСПРАВЬТЕ: Уберите круглые скобки () у всех функций */}
                <button onClick={showSuccess()} className="btn success">
                    Успех
                </button>
                
                <button onClick={showWarning()} className="btn warning">
                    Предупреждение
                </button>
                
                <button onClick={showError()} className="btn error">
                    Ошибка
                </button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


