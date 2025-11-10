import './style.css';

function Alert({ type, message }) {
    // Динамически формируйте className на основе пропса type
    // type может быть: "success", "warning", "error", "info"
    // Используйте шаблонную строку: className={`alert alert-${type}`}
    
    return (
        <div className="заменить_на_динамический_класс">
            <div className="alert-icon">
                {/* Условно отображайте иконку в зависимости от type */}
                {/* success: ✅, warning: ⚠️, error: ❌, info: ℹ️ */}
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




