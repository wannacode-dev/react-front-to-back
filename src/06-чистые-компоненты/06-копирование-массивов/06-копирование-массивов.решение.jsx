import './style.css';

function TodoList({ tasks }) {
    const tasksWithNew = [...tasks, { id: tasks.length + 1, text: "Новая задача" }];
    
    return (
        <div className="todo-list">
            <h2>Список задач</h2>
            <div className="tasks">
                {tasksWithNew.map(task => (
                    <div key={task.id} className="task">
                        <span className="task-id">#{task.id}</span>
                        <span className="task-text">{task.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    const tasks = [
        { id: 1, text: "Изучить React" },
        { id: 2, text: "Написать код" },
        { id: 3, text: "Выпить кофе" }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Неизменяемость массивов</h1>
            <p className="description">
                Никогда не изменяйте массивы напрямую! Создавайте новые массивы с помощью spread оператора.
            </p>
            
            <TodoList tasks={tasks} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


