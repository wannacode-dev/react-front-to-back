import './style.css';

function Task({ title, completed, priority }) {
    // Условно отображайте элементы на основе пропсов:
    // 1. Если completed true - добавьте "(Выполнено ✓)" после заголовка
    // 2. Если priority === "high" - покажите "🔴 Высокий приоритет"
    // 3. Если priority === "medium" - покажите "🟡 Средний приоритет"
    // 4. Если priority === "low" - покажите "🟢 Низкий приоритет"
    
    return (
        <div className="task">
            <h3 className="task-title">
                {title}
                {/* Добавьте условное отображение статуса выполнения */}
            </h3>
            
            <div className="task-priority">
                {/* Добавьте условное отображение приоритета */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="page-title">Мои задачи</h1>
            
            <div className="tasks-list">
                <Task title="Написать отчёт" completed={true} priority="high" />
                <Task title="Проверить email" completed={false} priority="medium" />
                <Task title="Позвонить клиенту" completed={false} priority="high" />
                <Task title="Обновить документацию" completed={true} priority="low" />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




