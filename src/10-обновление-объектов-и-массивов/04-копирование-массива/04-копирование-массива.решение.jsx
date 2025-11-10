import './style.css';

const { useState } = React;

function ColorList() {
    const [colors, setColors] = useState(['Красный', 'Синий', 'Зеленый']);
    
    function handleReverse() {
        setColors([...colors].reverse());
    }
    
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
            
            <button onClick={handleReverse} className="btn">
                Перевернуть список
            </button>
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




