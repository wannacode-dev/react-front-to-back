import './style.css';

function Task({ title, completed, priority }) {
    return (
        <div className="task">
            <h3 className="task-title">
                {title}
                {completed && <span className="completed-mark"> (Выполнено ✓)</span>}
            </h3>
            
            <div className="task-priority">
                {priority === "high" && "🔴 Высокий приоритет"}
                {priority === "medium" && "🟡 Средний приоритет"}
                {priority === "low" && "🟢 Низкий приоритет"}
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




