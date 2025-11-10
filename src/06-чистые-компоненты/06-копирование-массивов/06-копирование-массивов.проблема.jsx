import './style.css';

function TodoList({ tasks }) {
    // ❌ ПЛОХО: Не изменяйте массив напрямую!
    // tasks.push({ id: 4, text: "Новая задача" }); // Мутация!
    
    // ✅ ХОРОШО: Создайте новый массив с дополнительной задачей
    // Используйте spread оператор: [...tasks, новыйЭлемент]
    // Добавьте задачу: { id: tasks.length + 1, text: "Новая задача" }
    
    return (
        <div className="todo-list">
            <h2>Список задач</h2>
            <div className="tasks">
                {/* Отобразите все задачи из нового массива */}
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




