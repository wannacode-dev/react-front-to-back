import './style.css';

const { useState } = React;

function TaskManager() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Изучить React', priority: 'high', done: false },
        { id: 2, text: 'Написать код', priority: 'medium', done: false }
    ]);
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('medium');
    
    function handleAdd() {
        if (input.trim()) {
            setTasks([...tasks, {
                id: Date.now(),
                text: input,
                priority: priority,
                done: false
            }]);
            setInput('');
        }
    }
    
    function handleToggle(id) {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ));
    }
    
    function handleChangePriority(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                const nextPriority = 
                    task.priority === 'low' ? 'medium' :
                    task.priority === 'medium' ? 'high' : 'low';
                return { ...task, priority: nextPriority };
            }
            return task;
        }));
    }
    
    function handleRemove(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    const priorityLabels = {
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий'
    };
    
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
                
                <button onClick={handleAdd} className="btn-add">
                    Добавить
                </button>
            </div>
            
            <div className="tasks-list">
                {tasks.map(task => (
                    <div key={task.id} className={`task ${task.done ? 'done' : ''}`}>
                        <input 
                            type="checkbox"
                            checked={task.done}
                            onChange={() => handleToggle(task.id)}
                            className="checkbox"
                        />
                        
                        <span className="task-text">{task.text}</span>
                        
                        <button 
                            onClick={() => handleChangePriority(task.id)}
                            className={`priority-btn priority-${task.priority}`}
                        >
                            {priorityLabels[task.priority]}
                        </button>
                        
                        <button 
                            onClick={() => handleRemove(task.id)}
                            className="remove-btn"
                        >
                            ✕
                        </button>
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




