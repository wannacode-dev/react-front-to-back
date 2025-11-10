import './style.css';

const { useState } = React;

function TaskList() {
    // Создайте состояние tasks - массив:
    // ['Купить продукты', 'Сделать зарядку', 'Прочитать книгу']
    
    // Создайте функцию handleRemove, которая принимает index
    // и удаляет элемент из массива
    // Используйте filter: tasks.filter((_, i) => i !== index)
    
    return (
        <div className="tasks-container">
            <h1 className="title">Список задач</h1>
            
            {/* Отрендерьте список задач */}
            {/* Каждая задача в div с классом "task-item" */}
            {/* Добавьте кнопку "✕" для удаления */}
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


