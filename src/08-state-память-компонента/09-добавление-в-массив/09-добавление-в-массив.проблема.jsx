import './style.css';

const { useState } = React;

function TagList() {
    // Создайте состояние tags - пустой массив []
    // Создайте состояние inputValue - пустая строка ''
    
    // Создайте функцию handleInputChange, которая обновляет inputValue
    
    // Создайте функцию handleAddTag:
    // - проверяет, что inputValue не пустая
    // - добавляет inputValue в конец массива tags
    // - очищает inputValue
    // Используйте spread оператор: [...tags, inputValue]
    
    return (
        <div className="tags-container">
            <h1 className="title">Список тегов</h1>
            
            <div className="input-group">
                {/* Создайте input для ввода тега */}
                {/* Создайте кнопку "Добавить" */}
            </div>
            
            {/* Отрендерьте список тегов */}
            {/* Каждый тег в div с классом "tag" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <TagList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


