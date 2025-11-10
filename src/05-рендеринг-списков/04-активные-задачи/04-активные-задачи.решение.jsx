import './style.css';

function App() {
    const tasks = [
        { id: 1, text: "Написать отчёт", completed: false },
        { id: 2, text: "Проверить email", completed: true },
        { id: 3, text: "Позвонить клиенту", completed: false },
        { id: 4, text: "Обновить документацию", completed: true },
        { id: 5, text: "Провести встречу", completed: false },
        { id: 6, text: "Отправить письмо", completed: false }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Активные задачи</h1>
            <p className="subtitle">Показываем только невыполненные задачи</p>
            
            <div className="tasks-list">
                {tasks
                    .filter(task => task.completed === false)
                    .map(task => (
                        <div key={task.id} className="task-item">
                            <span className="task-icon">⏱️</span>
                            <span className="task-text">{task.text}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


