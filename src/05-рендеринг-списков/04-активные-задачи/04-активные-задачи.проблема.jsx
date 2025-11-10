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
    
    // Используйте filter() для фильтрации только активных задач (completed === false)
    // Затем используйте map() для отображения отфильтрованного списка
    // Цепочка методов: tasks.filter(...).map(...)
    
    return (
        <div className="container">
            <h1 className="title">Активные задачи</h1>
            <p className="subtitle">Показываем только невыполненные задачи</p>
            
            <div className="tasks-list">
                {/* Отфильтруйте и отобразите только задачи где completed === false */}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


