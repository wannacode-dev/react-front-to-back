import './style.css';

const { useState } = React;

function ShoppingList() {
    const [items, setItems] = useState([
        { id: 1, name: 'Хлеб', bought: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    
    function handleAddItem() {
        if (inputValue.trim() !== '') {
            setItems([...items, {
                id: Date.now(),
                name: inputValue,
                bought: false
            }]);
            setInputValue('');
        }
    }
    
    function handleToggle(id) {
        setItems(items.map(item => 
            item.id === id ? { ...item, bought: !item.bought } : item
        ));
    }
    
    function handleRemove(id) {
        setItems(items.filter(item => item.id !== id));
    }
    
    return (
        <div className="shopping-container">
            <h1 className="title">📝 Список покупок</h1>
            
            <div className="input-group">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Добавить товар"
                    className="input"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                />
                <button onClick={handleAddItem} className="btn-add">
                    Добавить
                </button>
            </div>
            
            <div className="items-list">
                {items.map(item => (
                    <div key={item.id} className={`item ${item.bought ? 'bought' : ''}`}>
                        <label className="item-label">
                            <input 
                                type="checkbox"
                                checked={item.bought}
                                onChange={() => handleToggle(item.id)}
                                className="checkbox"
                            />
                            <span className="item-name">{item.name}</span>
                        </label>
                        <button 
                            onClick={() => handleRemove(item.id)}
                            className="btn-remove"
                        >
                            🗑️
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
            <ShoppingList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




