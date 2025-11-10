import './style.css';

const { useState } = React;

function TaskList() {
    const [tasks, setTasks] = useState([
        'Купить продукты',
        'Сделать зарядку',
        'Прочитать книгу'
    ]);
    
    function handleRemove(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    
    return (
        <div className="tasks-container">
            <h1 className="title">Список задач</h1>
            
            <div className="task-list">
                {tasks.map((task, index) => (
                    <div key={index} className="task-item">
                        <span className="task-text">{task}</span>
                        <button 
                            onClick={() => handleRemove(index)}
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
            <TaskList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




