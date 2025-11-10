import './style.css';

const { useState } = React;

function TaskManager() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Изучить React', priority: 'high', done: false },
        { id: 2, text: 'Написать код', priority: 'medium', done: false }
    ]);
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('medium');
    
    // Создайте функцию handleAdd:
    // - добавляет новую задачу с полями: id (Date.now()), text (input), priority, done (false)
    // - очищает input
    
    // Создайте функцию handleToggle:
    // - переключает done у задачи по id
    
    // Создайте функцию handleChangePriority:
    // - изменяет priority у задачи по id
    // - циклический переход: low -> medium -> high -> low
    
    // Создайте функцию handleRemove:
    // - удаляет задачу по id
    
    return (
        <div className="manager-container">
            <h1 className="title">Менеджер задач</h1>
            
            <div className="input-group">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Новая задача"
                    className="input"
                />
                
                <select 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="select"
                >
                    <option value="low">Низкий</option>
                    <option value="medium">Средний</option>
                    <option value="high">Высокий</option>
                </select>
                
                {/* Кнопка "Добавить" */}
            </div>
            
            <div className="tasks-list">
                {tasks.map(task => (
                    <div key={task.id} className={`task ${task.done ? 'done' : ''}`}>
                        <input 
                            type="checkbox"
                            checked={task.done}
                            className="checkbox"
                        />
                        
                        <span className="task-text">{task.text}</span>
                        
                        {/* Кнопка для смены приоритета, показывает текущий приоритет */}
                        
                        {/* Кнопка удаления "✕" */}
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <TaskManager />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




