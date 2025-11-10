import './style.css';

const { useState } = React;

function FruitAdder() {
    const [fruits, setFruits] = useState(['Яблоко', 'Банан']);
    const [input, setInput] = useState('');
    
    // Создайте функцию handleAdd:
    // - добавляет input в конец массива
    // - используйте spread: setFruits([...fruits, input])
    // - очищает input
    
    // Создайте функцию handleAddToStart:
    // - добавляет input в начало массива
    // - используйте spread: setFruits([input, ...fruits])
    // - очищает input
    
    return (
        <div className="adder-container">
            <h1 className="title">Добавление фруктов</h1>
            
            <div className="input-group">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Название фрукта"
                    className="input"
                />
                <div className="btn-group">
                    {/* Кнопка "В начало" */}
                    {/* Кнопка "В конец" */}
                </div>
            </div>
            
            <ul className="fruit-list">
                {fruits.map((fruit, index) => (
                    <li key={index} className="fruit-item">
                        {fruit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <FruitAdder />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


