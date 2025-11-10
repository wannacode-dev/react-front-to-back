import './style.css';

const { useState } = React;

function FruitList() {
    // Создайте состояние fruits - массив:
    // ['Яблоко', 'Банан', 'Апельсин']
    
    return (
        <div className="list-container">
            <h1 className="title">Список фруктов</h1>
            
            {/* Отрендерьте список ul */}
            {/* Используйте map для вывода каждого фрукта в li */}
            {/* Не забудьте про key */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <FruitList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




