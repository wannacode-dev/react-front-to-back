import './style.css';

function Alert({ type, message }) {
    return (
        <div className={`alert alert-${type}`}>
            <div className="alert-icon">
                {type === "success" && "✅"}
                {type === "warning" && "⚠️"}
                {type === "error" && "❌"}
                {type === "info" && "ℹ️"}
            </div>
            
            <p className="alert-message">{message}</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="page-title">Система уведомлений</h1>
            
            <div className="alerts-list">
                <Alert 
                    type="success" 
                    message="Операция выполнена успешно!" 
                />
                
                <Alert 
                    type="warning" 
                    message="Внимание! Проверьте введённые данные." 
                />
                
                <Alert 
                    type="error" 
                    message="Ошибка! Не удалось выполнить операцию." 
                />
                
                <Alert 
                    type="info" 
                    message="Информация: обновление доступно." 
                />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


