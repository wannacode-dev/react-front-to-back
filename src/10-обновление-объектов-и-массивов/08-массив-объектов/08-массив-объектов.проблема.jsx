import './style.css';

const { useState } = React;

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Изучить React', done: false },
        { id: 2, text: 'Написать код', done: false },
        { id: 3, text: 'Отдохнуть', done: false }
    ]);
    
    // Создайте функцию handleToggle:
    // - принимает id
    // - переключает done для todo с этим id
    // - используйте map:
    // setTodos(todos.map(todo =>
    //   todo.id === id ? { ...todo, done: !todo.done } : todo
    // ))
    
    return (
        <div className="todo-container">
            <h1 className="title">Список задач</h1>
            
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
                        <label className="label">
                            <input 
                                type="checkbox"
                                checked={todo.done}
                                className="checkbox"
                            />
                            <span>{todo.text}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <TodoList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


