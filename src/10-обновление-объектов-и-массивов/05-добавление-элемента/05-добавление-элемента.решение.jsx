import './style.css';

const { useState } = React;

function FruitAdder() {
    const [fruits, setFruits] = useState(['Яблоко', 'Банан']);
    const [input, setInput] = useState('');
    
    function handleAdd() {
        if (input.trim()) {
            setFruits([...fruits, input]);
            setInput('');
        }
    }
    
    function handleAddToStart() {
        if (input.trim()) {
            setFruits([input, ...fruits]);
            setInput('');
        }
    }
    
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
                    <button onClick={handleAddToStart} className="btn">
                        В начало
                    </button>
                    <button onClick={handleAdd} className="btn">
                        В конец
                    </button>
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


