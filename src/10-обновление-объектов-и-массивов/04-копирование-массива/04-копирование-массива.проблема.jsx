import './style.css';

const { useState } = React;

function ColorList() {
    const [colors, setColors] = useState(['Красный', 'Синий', 'Зеленый']);
    
    // Создайте функцию handleReverse:
    // - переворачивает массив
    // - используйте spread и reverse:
    // setColors([...colors].reverse())
    // 
    // Почему нужно сначала скопировать массив?
    // Потому что reverse() мутирует исходный массив!
    
    return (
        <div className="list-container">
            <h1 className="title">Список цветов</h1>
            
            <ul className="color-list">
                {colors.map((color, index) => (
                    <li key={index} className="color-item">
                        {color}
                    </li>
                ))}
            </ul>
            
            {/* Кнопка "Перевернуть список" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ColorList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


